using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WorkerPortal
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;

        public Worker(ILogger<Worker> logger)
        {
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                ReadFile();
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                await Task.Delay(1000, stoppingToken);
            }
        }

        protected void ReadFile()
        {
            Logic.Interface.ILoadFiles loadFiles = new Logic.Operation.LoadFiles();
            string path = @"C:\Users\TGARCI40\Desktop\Portal\";
            string[] files = System.IO.Directory.GetFiles(path);

            foreach (string file in files)
            {
                switch (Path.GetExtension(file))
                {
                    case ".txt":
                        loadFiles.LoadTXTFiles(file);
                        break;
                    case ".xslx":
                        loadFiles.LoadExcelFiles(file);
                        break;
                    case ".xml":
                        loadFiles.LoadXMLFiles(file);
                        break;

                }
            }


        }
    }
}
