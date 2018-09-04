using Bannerflow.Core.Entities;
using Bannerflow.Core.Interfaces;
using System;
using System.Collections.Generic;

namespace Bannerflow.Service
{
    public class BannerService : IBannerService
    {
        private IRepository<Banner> _repo;
        public BannerService(IRepository<Banner> _repository)
        {
            _repo = _repository;

        }
        public void DeleteBanner(string id)
        {
            _repo.Delete(id);
        }

        public Banner GetBanner(string id)
        {
            return _repo.GetById(id);
        }

        public IEnumerable<Banner> GetBanners()
        {
            return _repo.GetAll();
        }

        public void CreateBanner(Banner banner)
        {
            banner.Created = DateTime.Now;
            _repo.Insert(banner);
        }

        public void UpdateBanner(Banner banner)
        {
            banner.Modified = DateTime.Now;
            _repo.Update(banner);
        }
    }
}
