using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Interface
{
    public interface ILoadFile : IDisposable
    {
        IEnumerable<Entity.Operation.Gestion> LoadFile(IEnumerable<Entity.User.User> user);
    }
}
