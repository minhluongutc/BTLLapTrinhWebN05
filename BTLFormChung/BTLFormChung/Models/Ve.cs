using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class Ve
{
    public string MaVe { get; set; } = null!;

    public string MaLv { get; set; } = null!;

    public string MaNv { get; set; } = null!;

    public string MaKh { get; set; } = null!;

    public string Ghe { get; set; } = null!;

    public DateTime NgayBanVe { get; set; }

    public virtual KhachHang MaKhNavigation { get; set; } = null!;

    public virtual LoaiVe MaLvNavigation { get; set; } = null!;

    public virtual NhanVien MaNvNavigation { get; set; } = null!;

    public virtual ChiTietChieuPhim MaVeNavigation { get; set; } = null!;
}
