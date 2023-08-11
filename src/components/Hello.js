import React from 'react'


const Holo = () => (

    
        <div>
            <h3>this the Xolos Home</h3>
                <li>Cedulas ASF 001</li>
    <li>Cedulas ASF 002</li>
    <li>Cedulas ASF 003</li>
    <li>Cedulas ASF 004</li>
    <li>Cedulas ASF 005</li>
    <li>Cedulas ASF 006</li>
    <li>Cedulas ASF 007</li>
    <li>Cedulas ASF 009</li>
    https://drive.google.com/file/d/18-oed_HeTIsYSRh4fICZrw0EQZ12LNxD/view
    https://drive.google.com/file/d/1_0y0a6LlgbsnrncmktXfnd18hk4cYpmf/view/2BzbPS
    https://download.microsoft.com/download/0/B/8/0B8EFDD9-8CE5-405C-A28D-A108A63AE2FC/AccessDatabaseEngine_X64.exe
    https://drive.google.com/file/d/1Q1OxwA4iWHnp0PzBtCVnwaDGGZr106eT/view?usp=sharing
        </div>
)


export default Holo






/*
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using usercontrol.Application.PartidasContables;
using usercontrol.Application.Marcas;
using ClosedXML.Excel;
using System.Linq;
using System.Data;
using Microsoft.Extensions.Configuration;

namespace usercontrol.Controllers
{
    [ApiController]
    [Route("api/migrate")]
    public class ExcelController: ControllerBase
    {
        private IMediator _mediator;
        private IConfiguration _configuration;

        public ExcelController(IMediator mediator, IConfiguration configuration)        
        
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));

            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

      
        

    
        


        [HttpPost("partidas")]         
        public async Task<IActionResult> UploadPartidas(IFormCollection data,  CancellationToken ct )
        {
            
            string rutacompleta =  await copiarArhivo(HttpContext.Request.Form.Files);
                         
            await cargarPartidas(rutacompleta,ct);                 
            
            return Ok();
            
        }

        [HttpPost("marcas")]         
        public async Task<IActionResult> UploadMarcas(IFormCollection data,  CancellationToken ct )
        {
            
            string rutacompleta =  await copiarArhivo(HttpContext.Request.Form.Files);
                         
            await cargarMarcas(rutacompleta,ct);                 
            
            return Ok();
            
        }


        public async Task<string> copiarArhivo (IFormFileCollection files){
            
            string rutacompleta = string.Empty;
            
            var randomResult = "";
            Random random = new Random();
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";           


            foreach (var file in files)
             {
                 
                if (file.Length > 0)
                {
                    
                     string rutaarchivo = Path.Combine("archivos", "cargasDeExcel");
                     string FileName =  file.FileName;                    
                     bool existeArchivo = false;

                     rutacompleta =  Path.Combine(rutaarchivo, FileName);

                     if (System.IO.File.Exists(rutacompleta))
                         existeArchivo = true;

                    

                    while (existeArchivo){  
                        existeArchivo = false;

                        string fileNameWithoutExt = Path.GetFileNameWithoutExtension(rutacompleta);
                        randomResult = new string(Enumerable.Repeat(chars, 8).Select(s => s[random.Next(s.Length)]).ToArray());

                    
                        rutacompleta = Path.Combine(rutaarchivo, fileNameWithoutExt + randomResult + ".xlsx" );

                        if (System.IO.File.Exists(rutacompleta))
                            existeArchivo=true;
                    }

                   
                    using (var fileStream = new FileStream(rutacompleta, FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }
                }
             }


            return rutacompleta;
        }


        public async Task cargarPartidas(string nombreArchivo, CancellationToken ct ){

            using var wbook = new XLWorkbook(nombreArchivo);
            var ws1 = wbook.Worksheet(1);
            var renglon = ws1.FirstRowUsed();            

            renglon = renglon.RowBelow();
                    
            while (!renglon.Cell(1).IsEmpty())
            {                            

                await _mediator.Send(new CreatePartida.Command { Cuenta = renglon.Cell(1).GetString().Trim(), 
                                                                 Nombre = renglon.Cell(2).GetString().Trim() }  );

                renglon = renglon.RowBelow();
            }                        
        }

        public async Task cargarMarcas(string nombreArchivo, CancellationToken ct ){

            using var wbook = new XLWorkbook(nombreArchivo);
            var ws1 = wbook.Worksheet(1);
            var renglon = ws1.FirstRowUsed();            

            renglon = renglon.RowBelow();
                    
            while (!renglon.Cell(1).IsEmpty())
            {                            

                await _mediator.Send(new  CargarMarcas.Command { Clave = renglon.Cell(1).GetString().Trim(), 
                                                                 Nombre = renglon.Cell(2).GetString().Trim() }  );

                renglon = renglon.RowBelow();
            }            
            
        }



         

    }


}

*/


/*

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using usercontrol.Context;
using usercontrol.Entities;

namespace usercontrol.Application.Marcas
{
    public class CargarMarcas
    {
        public class Command : IRequest
        {            
            public string Clave { get; set; }   

            public string Nombre { get; set; }
        }

        

        public class Handler : IRequestHandler<Command>
        {
            private MyContext _context;

            public Handler(MyContext context)
            {
                _context = context ?? throw new ArgumentNullException(nameof(context));
            }


            public class CommandValidator : AbstractValidator<Command>{
                
                public CommandValidator()
                {                    
                    RuleFor(x => x.Clave).NotEmpty();                                
                    RuleFor(x => x.Nombre).NotEmpty();
                }
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
    
                

                var marca = await _context.Marcas
                                                .Where(p=> p.Clave.ToLower() == request.Clave.ToLower()) 
                                                .FirstOrDefaultAsync();


                if (marca == null){

               

                     var nuevoRegistro = new Marca {                    
                            Clave = request.Clave,
                            Nombre = request.Nombre,
                            Activo = true
                        };

                        _context.Marcas.Add(nuevoRegistro);

                    
                }else {
                    marca.Nombre = request.Nombre;
                }

                

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                    return Unit.Value;

                throw new Exception("Ocurrió un problema al guardar los datos");


                
            }
        }
    }

        
}
*/