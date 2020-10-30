using System;
using System.Collections.Generic;
using System.Text;

namespace Logic.Interface.Operation
{
    public interface IGestion : IDisposable
    {
        IEnumerable<Entity.Operation.Gestion> GetGestion(IEnumerable<Entity.User.User> user);

    }
}
