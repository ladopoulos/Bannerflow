using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bannerflow.Infrastructure.Data.MongoDbRepository
{
    public class Settings
    {
        public string ConnectionString { get; set; }
        public string Database { get; set; }
        public string Collection { get; set; }
    }

}
