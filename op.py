umur = 20
punya_sim = True
boleh_nyetir = (umur >= 17) and punya_sim  # True

hari_libur = True
sakit = False
tidak_kerja = hari_libur or sakit  # True

aktif = True
tidak_aktif = not aktif  # False
