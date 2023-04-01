using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class ChiTietChieuPhim
{
    public string MaVe { get; set; } = null!;

    public string MaPhong { get; set; } = null!;

    public string MaPhim { get; set; } = null!;

    public DateTime XuatChieu { get; set; }

    public string? GioChieu { get; set; }

    public virtual Phim MaPhimNavigation { get; set; } = null!;

    public virtual PhongChieu MaPhongNavigation { get; set; } = null!;

    public virtual Ve? Ve { get; set; }
}
