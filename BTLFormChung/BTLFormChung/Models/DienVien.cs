using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class DienVien
{
    public string MaDv { get; set; } = null!;

    public string TenDv { get; set; } = null!;

    public string MoTa { get; set; } = null!;

    public DateTime NgaySinh { get; set; }

    public string ChieuCao { get; set; } = null!;

    public string QuocTich { get; set; } = null!;

    public string? TieuSu { get; set; }

    public string? AnhDaiDien { get; set; }

    public virtual ICollection<AnhDaiDien> AnhDaiDiens { get; } = new List<AnhDaiDien>();

    public virtual ICollection<Phim> MaPhims { get; } = new List<Phim>();
}
