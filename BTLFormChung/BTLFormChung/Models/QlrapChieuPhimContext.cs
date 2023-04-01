using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BTLFormChung.Models;

public partial class QlrapChieuPhimContext : DbContext
{
    public QlrapChieuPhimContext()
    {
    }

    public QlrapChieuPhimContext(DbContextOptions<QlrapChieuPhimContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AnhDaiDien> AnhDaiDiens { get; set; }

    public virtual DbSet<ChiTietChieuPhim> ChiTietChieuPhims { get; set; }

    public virtual DbSet<DangPhim> DangPhims { get; set; }

    public virtual DbSet<DienVien> DienViens { get; set; }

    public virtual DbSet<KhachHang> KhachHangs { get; set; }

    public virtual DbSet<LoaiPhim> LoaiPhims { get; set; }

    public virtual DbSet<LoaiVe> LoaiVes { get; set; }

    public virtual DbSet<NhanVien> NhanViens { get; set; }

    public virtual DbSet<Phim> Phims { get; set; }

    public virtual DbSet<PhongChieu> PhongChieus { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Ve> Ves { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(" Data Source=OZ;Initial Catalog=QLRapChieuPhim;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AnhDaiDien>(entity =>
        {
            entity.HasKey(e => e.TenFileAnh);

            entity.ToTable("AnhDaiDien");

            entity.Property(e => e.TenFileAnh).HasMaxLength(200);
            entity.Property(e => e.MaDv).HasMaxLength(20);
            entity.Property(e => e.ViTri).HasMaxLength(50);

            entity.HasOne(d => d.MaDvNavigation).WithMany(p => p.AnhDaiDiens)
                .HasForeignKey(d => d.MaDv)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_AnhDaiDien_DienVien");
        });

        modelBuilder.Entity<ChiTietChieuPhim>(entity =>
        {
            entity.HasKey(e => e.MaVe);

            entity.ToTable("ChiTietChieuPhim");

            entity.Property(e => e.MaVe).HasMaxLength(20);
            entity.Property(e => e.GioChieu)
                .HasMaxLength(10)
                .HasColumnName("gioChieu");
            entity.Property(e => e.MaPhim).HasMaxLength(20);
            entity.Property(e => e.MaPhong).HasMaxLength(20);
            entity.Property(e => e.XuatChieu).HasColumnType("date");

            entity.HasOne(d => d.MaPhimNavigation).WithMany(p => p.ChiTietChieuPhims)
                .HasForeignKey(d => d.MaPhim)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ChiTietChieuPhim_Phim1");

            entity.HasOne(d => d.MaPhongNavigation).WithMany(p => p.ChiTietChieuPhims)
                .HasForeignKey(d => d.MaPhong)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ChiTietChieuPhim_PhongChieu1");
        });

        modelBuilder.Entity<DangPhim>(entity =>
        {
            entity.HasKey(e => e.MaDp);

            entity.ToTable("DangPhim");

            entity.Property(e => e.MaDp)
                .HasMaxLength(20)
                .HasColumnName("MaDP");
            entity.Property(e => e.DangPhim1)
                .HasMaxLength(50)
                .HasColumnName("DangPhim");
        });

        modelBuilder.Entity<DienVien>(entity =>
        {
            entity.HasKey(e => e.MaDv).HasName("PK__DienVien__272585B76B6CD1E0");

            entity.ToTable("DienVien");

            entity.Property(e => e.MaDv).HasMaxLength(20);
            entity.Property(e => e.ChieuCao).HasMaxLength(5);
            entity.Property(e => e.NgaySinh).HasColumnType("date");
            entity.Property(e => e.QuocTich).HasMaxLength(20);
            entity.Property(e => e.TenDv).HasMaxLength(50);

            entity.HasMany(d => d.MaPhims).WithMany(p => p.MaDvs)
                .UsingEntity<Dictionary<string, object>>(
                    "DienVienPhim",
                    r => r.HasOne<Phim>().WithMany()
                        .HasForeignKey("MaPhim")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__DienVien___MaPhi__3E52440B"),
                    l => l.HasOne<DienVien>().WithMany()
                        .HasForeignKey("MaDv")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__DienVien_P__MaDv__3F466844"),
                    j =>
                    {
                        j.HasKey("MaDv", "MaPhim").HasName("PK__DienVien__0389866910159D40");
                        j.ToTable("DienVien_Phim");
                        j.IndexerProperty<string>("MaDv").HasMaxLength(20);
                        j.IndexerProperty<string>("MaPhim").HasMaxLength(20);
                    });
        });

        modelBuilder.Entity<KhachHang>(entity =>
        {
            entity.HasKey(e => e.MaKh);

            entity.ToTable("KhachHang");

            entity.Property(e => e.MaKh)
                .HasMaxLength(20)
                .HasColumnName("MaKH");
            entity.Property(e => e.Hoten).HasMaxLength(50);
            entity.Property(e => e.NgaySinh).HasColumnType("date");
            entity.Property(e => e.Sdt)
                .HasMaxLength(10)
                .HasColumnName("SDT");
            entity.Property(e => e.Username)
                .HasMaxLength(20)
                .HasColumnName("username");

            entity.HasOne(d => d.UsernameNavigation).WithMany(p => p.KhachHangs)
                .HasForeignKey(d => d.Username)
                .HasConstraintName("FK_KhachHang_Users");
        });

        modelBuilder.Entity<LoaiPhim>(entity =>
        {
            entity.HasKey(e => e.MaLp);

            entity.ToTable("LoaiPhim");

            entity.Property(e => e.MaLp)
                .HasMaxLength(20)
                .HasColumnName("MaLP");
            entity.Property(e => e.LoaiPhim1)
                .HasMaxLength(50)
                .HasColumnName("LoaiPhim");
        });

        modelBuilder.Entity<LoaiVe>(entity =>
        {
            entity.HasKey(e => e.MaLv);

            entity.ToTable("LoaiVe");

            entity.Property(e => e.MaLv)
                .HasMaxLength(20)
                .HasColumnName("MaLV");
            entity.Property(e => e.DonGia).HasColumnType("money");
            entity.Property(e => e.TenLv)
                .HasMaxLength(50)
                .HasColumnName("TenLV");
        });

        modelBuilder.Entity<NhanVien>(entity =>
        {
            entity.HasKey(e => e.MaNv);

            entity.ToTable("NhanVien");

            entity.Property(e => e.MaNv)
                .HasMaxLength(20)
                .HasColumnName("MaNV");
            entity.Property(e => e.GioiTinh).HasMaxLength(10);
            entity.Property(e => e.Hoten).HasMaxLength(50);
            entity.Property(e => e.NgaySinh).HasColumnType("date");
            entity.Property(e => e.Sdt)
                .HasMaxLength(10)
                .HasColumnName("SDT");
            entity.Property(e => e.Username)
                .HasMaxLength(20)
                .HasColumnName("username");

            entity.HasOne(d => d.UsernameNavigation).WithMany(p => p.NhanViens)
                .HasForeignKey(d => d.Username)
                .HasConstraintName("FK_NhanVien_Users");
        });

        modelBuilder.Entity<Phim>(entity =>
        {
            entity.HasKey(e => e.MaPhim);

            entity.ToTable("Phim");

            entity.Property(e => e.MaPhim).HasMaxLength(20);
            entity.Property(e => e.MaDp)
                .HasMaxLength(20)
                .HasColumnName("MaDP");
            entity.Property(e => e.MaLp)
                .HasMaxLength(20)
                .HasColumnName("MaLP");
            entity.Property(e => e.NgayKhoiChieu).HasColumnType("date");
            entity.Property(e => e.Nsx)
                .HasMaxLength(50)
                .HasColumnName("NSX");
            entity.Property(e => e.QuocGia).HasMaxLength(50);

            entity.HasOne(d => d.MaDpNavigation).WithMany(p => p.Phims)
                .HasForeignKey(d => d.MaDp)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Phim_DangPhim1");

            entity.HasOne(d => d.MaLpNavigation).WithMany(p => p.Phims)
                .HasForeignKey(d => d.MaLp)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Phim_LoaiPhim1");
        });

        modelBuilder.Entity<PhongChieu>(entity =>
        {
            entity.HasKey(e => e.MaPhong);

            entity.ToTable("PhongChieu");

            entity.Property(e => e.MaPhong).HasMaxLength(20);
            entity.Property(e => e.TenPhong).HasMaxLength(50);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Username).HasName("PK__Users__F3DBC573A9FFA3A6");

            entity.Property(e => e.Username)
                .HasMaxLength(20)
                .HasColumnName("username");
            entity.Property(e => e.LoaiUser)
                .HasMaxLength(20)
                .HasColumnName("loaiUser");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .HasColumnName("password");
        });

        modelBuilder.Entity<Ve>(entity =>
        {
            entity.HasKey(e => e.MaVe);

            entity.ToTable("Ve");

            entity.Property(e => e.MaVe).HasMaxLength(20);
            entity.Property(e => e.Ghe).HasMaxLength(50);
            entity.Property(e => e.MaKh)
                .HasMaxLength(20)
                .HasColumnName("MaKH");
            entity.Property(e => e.MaLv)
                .HasMaxLength(20)
                .HasColumnName("MaLV");
            entity.Property(e => e.MaNv)
                .HasMaxLength(20)
                .HasColumnName("MaNV");
            entity.Property(e => e.NgayBanVe).HasColumnType("date");

            entity.HasOne(d => d.MaKhNavigation).WithMany(p => p.Ves)
                .HasForeignKey(d => d.MaKh)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ve_KhachHang1");

            entity.HasOne(d => d.MaLvNavigation).WithMany(p => p.Ves)
                .HasForeignKey(d => d.MaLv)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ve_LoaiVe1");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Ves)
                .HasForeignKey(d => d.MaNv)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ve_NhanVien1");

            entity.HasOne(d => d.MaVeNavigation).WithOne(p => p.Ve)
                .HasForeignKey<Ve>(d => d.MaVe)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Ve_ChiTietChieuPhim1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
