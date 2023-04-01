using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class LoaiPhim
{
    public string MaLp { get; set; } = null!;

    public string LoaiPhim1 { get; set; } = null!;

    public virtual ICollection<Phim> Phims { get; } = new List<Phim>();
}
