using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class AnhDaiDien
{
    public string TenFileAnh { get; set; } = null!;

    public string MaDv { get; set; } = null!;

    public string? ViTri { get; set; }

    public virtual DienVien MaDvNavigation { get; set; } = null!;
}
