using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class KhachHang
{
    public string MaKh { get; set; } = null!;

    public string Hoten { get; set; } = null!;

    public string DiaChi { get; set; } = null!;

    public string Sdt { get; set; } = null!;

    public DateTime NgaySinh { get; set; }

    public string? Username { get; set; }

    public virtual User? UsernameNavigation { get; set; }

    public virtual ICollection<Ve> Ves { get; } = new List<Ve>();
}
