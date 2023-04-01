using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class NhanVien
{
    public string MaNv { get; set; } = null!;

    public string Hoten { get; set; } = null!;

    public string DiaChi { get; set; } = null!;

    public string Sdt { get; set; } = null!;

    public DateTime NgaySinh { get; set; }

    public string GioiTinh { get; set; } = null!;

    public string? Username { get; set; }

    public virtual User? UsernameNavigation { get; set; }

    public virtual ICollection<Ve> Ves { get; } = new List<Ve>();
}
