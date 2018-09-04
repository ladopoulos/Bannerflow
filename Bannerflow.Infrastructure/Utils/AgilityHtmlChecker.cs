using Bannerflow.Core.Interfaces;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bannerflow.Core.Utils
{
    public class AgilityHtmlChecker : IHtmlChecker
    {
        public bool HtmlMarkupIsValid(string html)
        {
            HtmlDocument doc = new HtmlDocument();
            doc.LoadHtml(html);

            return doc.ParseErrors.Count() > 0 ? false : true;
        }
    }
}
