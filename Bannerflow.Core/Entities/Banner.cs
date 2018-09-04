using System;
using System.Collections.Generic;
using System.Text;

namespace Bannerflow.Core.Entities
{
    public class Banner: EntityBase
    {        
        public string Html { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Modified { get; set; }
    }
}
