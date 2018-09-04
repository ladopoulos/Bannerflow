using System;
using System.Collections.Generic;
using System.Text;

namespace Bannerflow.Core.Interfaces
{
    public interface IHtmlChecker
    {
        bool HtmlMarkupIsValid(string html);
    }
}
