using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class Phim
{
    public string MaPhim { get; set; } = null!;

    public string MaLp { get; set; } = null!;

    public string MaDp { get; set; } = null!;

    public string TenPhim { get; set; } = null!;

    public string Nsx { get; set; } = null!;

    public string? AnhDaiDien { get; set; }

    public string? NoiDung { get; set; }

    public string? QuocGia { get; set; }

    public DateTime? NgayKhoiChieu { get; set; }

    public virtual ICollection<ChiTietChieuPhim> ChiTietChieuPhims { get; } = new List<ChiTietChieuPhim>();

    public virtual DangPhim MaDpNavigation { get; set; } = null!;

    public virtual LoaiPhim MaLpNavigation { get; set; } = null!;

    public virtual ICollection<DienVien> MaDvs { get; } = new List<DienVien>();
}
