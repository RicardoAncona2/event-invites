import sql from 'better-sqlite3';
import { revalidatePath } from 'next/cache';

const db = new sql('event-invites.db');
export type HeaderType = { id: number, headerText1?: string, headerText2?: string, headerText3?: string, headerColor?: string }
export type HeroType = { id: number, image_url?: string, title?: string, subTitle?: string, eventDate?: Date }
export type FamilyInfoType = { id: number, title1?: string, title2?: string, subTitle1?: string, subTitle2?: string }

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS header (
      id INTEGER PRIMARY KEY, 
      headerText1 TEXT, 
      headerText2 TEXT,
      headerText3 TEXT,
      headerColor TEXT
    )`);
  db.exec(
    ` CREATE TABLE IF NOT EXISTS hero (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      subTitle TEXT NOT NULL,
      eventDate TEXT NOT NULL
    )`);
  db.exec(
    `CREATE TABLE IF NOT EXISTS familyInfo (
        id INTEGER PRIMARY KEY, 
        title1 TEXT NOT NULL,
        title2 TEXT NOT NULL, 
        subTitle1 TEXT NOT NULL,
        subTitle2 TEXT NOT NULL
      )`);

  // Creating two dummy users if they don't exist already
  const headerStmt = db.prepare('SELECT COUNT(*) AS count FROM header');
  const heroStmt = db.prepare('SELECT COUNT(*) AS count FROM hero');
  const familyInfoStmt = db.prepare('SELECT COUNT(*) AS count FROM familyInfo');

  const result = headerStmt.get() as { count: number };
  if (result.count === 0) {
    db.exec(`
    INSERT INTO header (headerText1, headerText2, headerText3, headerColor)
    VALUES ('John', 'Doe', 'john@example.com','#F472B8')`
    );
  }
  const heroResult = heroStmt.get() as { count: number };
  if (heroResult.count === 0) {
    db.exec(`
    INSERT INTO hero (image_url, title, subTitle, eventDate)
    VALUES ('/gallery1.jpg', 'Mis XV', 'JUANA PEREZ','2025-12-31T18:19:00')
  `);
  }
  const familyResult = familyInfoStmt.get() as { count: number };

  if (familyResult.count === 0) {
    db.exec(`
      INSERT INTO familyInfo (title1, title2, subTitle1, subTitle2)
      VALUES ('Con la bendicion de Dios, mis padres', 'juan perez & juana lopez', 'y padrinos','Emilio Perez y Emilia Perez')
   ` );
  }
}

initDb();

export async function getHeader(id: number): Promise<HeaderType[]> {

  const stmt = db.prepare(`
    SELECT * FROM header
    WHERE id = ?`);

  return stmt.all(id) as HeaderType[];
}
export async function getFamilyInfo(id: number): Promise<FamilyInfoType[]> {

  const stmt = db.prepare(`
    SELECT * FROM familyInfo
    WHERE id = ?`);

  return stmt.all(id) as FamilyInfoType[];
}
export async function storeHeader(header: HeaderType) {
  const stmt = db.prepare(`
    INSERT INTO header (headerText1, headerText2, headerText3, headerColor)
    VALUES (?, ?, ?, ?)`);
  return stmt.run(header.headerText1, header.headerText2, header.headerText3, header.headerColor);
}

export async function updateHeader(header: HeaderType) {
  const stmt = db.prepare(`
    UPDATE header
    SET 
      headerText1 = COALESCE(?, headerText1),
      headerText2 = COALESCE(?, headerText2),
      headerText3 = COALESCE(?, headerText3),
      headerColor = COALESCE(?, headerColor)
    WHERE id = ?`);
  revalidatePath("/")
  return stmt.run(header.headerText1, header.headerText2, header.headerText3, header.headerColor, header.id);
}
export async function updateHero(hero: HeroType) {
  const stmt = db.prepare(`
    UPDATE hero
    SET 
      image_url = COALESCE(?, image_url),
      title = COALESCE(?, title),
      subTitle = COALESCE(?, subTitle),
      eventDate = COALESCE(?, eventDate)
    WHERE id = ?`);
  revalidatePath("/")
  return stmt.run(hero.image_url, hero.title, hero.subTitle, hero.eventDate, hero.id);

}
export async function updateFamilyInfo(values: FamilyInfoType) {
  const stmt = db.prepare(`
    UPDATE familyInfo
    SET 
      title1 = COALESCE(?, title1),
      title2 = COALESCE(?, title2),
      subTitle1 = COALESCE(?, subTitle1),
      subTitle2= COALESCE(?, subTitle2)
    WHERE id = ?`);
  revalidatePath("/")
  return stmt.run(values.title1, values.title2, values.subTitle1, values.subTitle2, values.id);

}
export async function getHero(id: number): Promise<HeroType[]> {

  const stmt = db.prepare(`
    SELECT * FROM hero
    WHERE id = ?
    `);

  return stmt.all(id) as HeroType[];
}