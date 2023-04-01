using BTLFormChung.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using X.PagedList;

namespace BTLFormChung.Controllers
{
    public class HomeController : Controller
    {
        QlrapChieuPhimContext db = new QlrapChieuPhimContext();

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index(int? page)
        {
            int pageSize = 6;
            int pageNumber = page == null || page < 0 ? 1 : page.Value;
            var lstsanpham = db.Phims.AsNoTracking().OrderBy(x => x.TenPhim);
            PagedList<Phim> lst = new PagedList<Phim>(lstsanpham, pageNumber, pageSize);

            return View(lst);
        }

        public IActionResult PhimDangChieu(int? page)
        {
            int pageSize = 9;
            int pageNumber = page == null || page < 0 ? 1 : page.Value;
            var lstsanpham = db.Phims.AsNoTracking().OrderBy(x => x.TenPhim);
            PagedList<Phim> lst = new PagedList<Phim>(lstsanpham, pageNumber, pageSize);
            return View();
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}