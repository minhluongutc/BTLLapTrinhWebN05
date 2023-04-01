using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class PhongChieu
{
    public string MaPhong { get; set; } = null!;

    public string TenPhong { get; set; } = null!;

    public virtual ICollection<ChiTietChieuPhim> ChiTietChieuPhims { get; } = new List<ChiTietChieuPhim>();
}
