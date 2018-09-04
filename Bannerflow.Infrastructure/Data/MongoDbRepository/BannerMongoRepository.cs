using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Bannerflow.Core.Entities;
using Bannerflow.Core.Interfaces;
using Bannerflow.Infrastructure.Data.MongoDbRepository;
using MongoDB.Driver;
using System.Linq;
using Bannerflow.Infrastructure.Data.MongoDbRepository.DataModels;
using MongoDB.Bson;

namespace Bannerflow.Infrastructure.Data.MongoDbRepository
{
    public class BannerMongoRepository : IRepository<Banner>
    {
        private readonly IMongoDatabase _db;
        private IMongoCollection<BannerEntity> _collection;

        public BannerMongoRepository(Settings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            _db = client.GetDatabase(settings.Database);
            _collection = _db.GetCollection<BannerEntity>(settings.Collection);
        }
        public void Insert(Banner entity)
        {
            var dbEntity = new BannerEntity { Html = entity.Html, Modified = entity.Modified, Created = entity.Created };

            _collection.InsertOne(dbEntity);
        }

        public void Update(Banner entity)
        {
            if (string.IsNullOrEmpty(entity.Id))
                Insert(entity);

            var filter = Builders<BannerEntity>.Filter.Eq(x=>x.InternalId, ObjectId.Parse(entity.Id));
            var res = _collection.UpdateOne(filter, Builders<BannerEntity>.Update.Set(b => b.Html, entity.Html).Set(b => b.Modified, entity.Modified));
        }

        public void Delete(string id)
        {
            _collection.DeleteMany(x => x.InternalId == ObjectId.Parse(id));
        }

        public IEnumerable<Banner> GetAll()
        {
            return _collection.Find(_ => true).ToList()
                .Select(b => new Banner() { Id = b.InternalId.ToString(), Html = b.Html, Created = b.Created, Modified = b.Modified });
        }

        public Banner GetById(string id)
        {
            var item = _collection.Find(x => x.InternalId == ObjectId.Parse(id)).FirstOrDefault();

            if (item != null)
                return new Banner() { Id = item.InternalId.ToString(), Html = item.Html, Created = item.Created, Modified = item.Modified };

            return null;
        }

    }
}
