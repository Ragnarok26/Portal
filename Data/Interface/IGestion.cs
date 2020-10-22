using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Interface
{
    public interface IGestion : IDisposable
    {
        IEnumerable<Entity.Operation.Gestion> GetGestion(IEnumerable<Entity.Operation.Gestion> user);

    }
}
