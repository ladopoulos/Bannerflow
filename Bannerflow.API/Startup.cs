using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bannerflow.Core.Interfaces;
using Bannerflow.Core.Entities;
using Bannerflow.Infrastructure.Data.MongoDbRepository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Bannerflow.Core.Service;
using Bannerflow.Core.Utils;
using Newtonsoft.Json;

namespace Bannerflow.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p =>
                {
                    p.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });
            services.AddMvc(options => options.OutputFormatters.Add(new HtmlOutputFormatter())).AddJsonOptions(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            });


            services.AddTransient<IBannerService, BannerService>();
            services.AddTransient<IHtmlChecker, AgilityHtmlChecker>();

            services.AddTransient<IRepository<Banner>>(x => new BannerMongoRepository(new Settings
            {
                ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value,
                Database = Configuration.GetSection("MongoConnection:Database").Value,
                Collection = Configuration.GetSection("MongoConnection:Collection").Value
            }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowAll");

            app.UseMvc(ConfigureRoute);

        }

        private void ConfigureRoute(IRouteBuilder routeBuilder)
        {
            //Home/Index 
            routeBuilder.MapRoute("Default", "{controller = Banner}/{action = Index}/{id?}");
        }
    }

    public class HtmlOutputFormatter : StringOutputFormatter
    {
        public HtmlOutputFormatter()
        {
            SupportedMediaTypes.Add("text/html");
        }
    }
}
