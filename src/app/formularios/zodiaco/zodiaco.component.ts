export class ZodiacoComponent {
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  diaNacimiento: number | null = null;
  mesNacimiento: number | null = null;
  anioNacimiento: number | null = null;
  sexo: string = '';

  obtenerSignoZodiacalChino(): string {
    const anio = this.anioNacimiento!;
    if ([1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025].includes(anio)) return 'Serpiente';
    if ([1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024].includes(anio)) return 'Dragón';
    if ([1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026].includes(anio)) return 'Caballo';
    if ([1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027].includes(anio)) return 'Cabra';
    if ([1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020].includes(anio)) return 'Rata';
    if ([1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021].includes(anio)) return 'Buey';
    if ([1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022].includes(anio)) return 'Tigre';
    if ([1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023].includes(anio)) return 'Conejo';
    if ([1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028].includes(anio)) return 'Mono';
    if ([1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029].includes(anio)) return 'Gallo';
    if ([1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030].includes(anio)) return 'Perro';
    if ([1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031].includes(anio)) return 'Cerdo';
    return 'Signo no encontrado';
  }

  imprimirDatos(): void {
    const signoZodiacal = this.obtenerSignoZodiacalChino();
    console.log(`Hola ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}, tu signo zodiacal chino es: ${signoZodiacal}`);
  }
}
