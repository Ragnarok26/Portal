

using Logic.Interface.Operation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Logic.Operation
{
    public class Gestion : IGestion
    {
        public void Dispose()
        {
        }

        public IEnumerable<Entity.Operation.Gestion> GetGestion(IEnumerable<Entity.User.User> user)
        {
            IEnumerable<Entity.Operation.Gestion> gestionData= new List<Entity.Operation.Gestion>();
            using (Data.Interface.IGestion data = new Data.Operation.Gestion())
            {
                gestionData = data.GetGestion(user);
            }
            return gestionData;
        }
    }
}
