using Bannerflow.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bannerflow.Core.Interfaces
{
    public interface IBannerService
    {
        IEnumerable<Banner> GetBanners();
        Banner GetBanner(string id);
        void CreateBanner(Banner banner);
        void UpdateBanner(Banner banner);
        void DeleteBanner(string id);
    }
}
