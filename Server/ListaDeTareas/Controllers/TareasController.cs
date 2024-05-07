using ListaDeTareas.Data.Repositories;
using ListaDeTareas.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ListaDeTareas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareasController : ControllerBase
    {
        private readonly ITareaRepository _tareaRepository;

        public TareasController(ITareaRepository tareaRepository)
        {
            _tareaRepository = tareaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTareas()
        {
            return Ok(await _tareaRepository.GetAllTareas());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTareaById(int id)
        {
            return Ok(await _tareaRepository.GetTareaById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateTarea([FromBody] Tarea tarea)
        {
            if (tarea == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest();

            var created = await _tareaRepository.InsertTarea(tarea);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateTarea([FromBody] Tarea tarea)
        {
            if (tarea == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest();

            await _tareaRepository.UpdateTarea(tarea);

            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTarea(int id)
        {
            await _tareaRepository.DeleteTarea(new Tarea { Id = id });

            return NoContent();
        }
    }
}
