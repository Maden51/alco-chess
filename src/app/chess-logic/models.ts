export enum Color {
  White,
  Black
}

export type Coords = {
  x: number;
  y: number;
}

export enum FENChar {
  WhitePawn = 'WP',
  WhiteRook = 'WR',
  WhiteBishop = 'WB',
  WhiteKnight = 'WK',
  WhiteQueen = 'WQ',
  WhiteKing = 'WK',
  BlackPawn = 'BP',
  BlackRook = 'BR',
  BlackBishop = 'BB',
  BlackKnight = 'BK',
  BlackQueen = 'BQ',
  BlackKing = 'BK',
}