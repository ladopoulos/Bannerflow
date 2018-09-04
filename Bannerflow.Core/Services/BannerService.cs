using Bannerflow.Core.Entities;
using Bannerflow.Core.Interfaces;
using System;
using System.Collections.Generic;

namespace Bannerflow.Core.Service
{
    public class BannerService : IBannerService
    {
        private IRepository<Banner> _repo;
        private IHtmlChecker _htmlChecker;
        public BannerService(IRepository<Banner> _repository, IHtmlChecker htmlChecker)
        {
            _repo = _repository;
            _htmlChecker = htmlChecker;

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
            if (!_htmlChecker.HtmlMarkupIsValid(banner.Html))
                throw new ArgumentException("Invalid HTML markup");


            banner.Created = DateTime.Now;
            _repo.Insert(banner);
        }

        public void UpdateBanner(Banner banner)
        {
            if (!_htmlChecker.HtmlMarkupIsValid(banner.Html))
                throw new ArgumentException("Invalid HTML markup");

            banner.Modified = DateTime.Now;
            _repo.Update(banner);
        }
    }
}
