using System;
using System.Collections.Generic;

namespace BTLFormChung.Models;

public partial class DangPhim
{
    public string MaDp { get; set; } = null!;

    public string DangPhim1 { get; set; } = null!;

    public virtual ICollection<Phim> Phims { get; } = new List<Phim>();
}
