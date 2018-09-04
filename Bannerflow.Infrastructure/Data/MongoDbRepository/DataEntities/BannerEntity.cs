using Bannerflow.Core.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;
namespace Bannerflow.Infrastructure.Data.MongoDbRepository.DataModels
{
    internal class BannerEntity
    {

        [BsonId]
        public ObjectId InternalId { get; set; }        
        public string Html { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Modified { get; set; }
    }
}
