using Bannerflow.Core.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Bannerflow.Core.Interfaces
{
   public interface IRepository<T> where T : EntityBase
    {     
        IEnumerable<T> GetAll();       
        T GetById(string id);      
        void Insert(T entity);              
        void Delete(string id);      
        void Update(T entity);
    }
}
