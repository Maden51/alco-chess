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
  WhiteKnight = 'WN',
  WhiteQueen = 'WQ',
  WhiteKing = 'WK',
  BlackPawn = 'BP',
  BlackRook = 'BR',
  BlackBishop = 'BB',
  BlackKnight = 'BN',
  BlackQueen = 'BQ',
  BlackKing = 'BK',
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: "assets/pieces/white pawn.svg",
  [FENChar.WhiteRook]: "assets/pieces/white rook.svg",
  [FENChar.WhiteBishop]: "assets/pieces/white bishop.svg",
  [FENChar.WhiteKnight]: "assets/pieces/white knight.svg",
  [FENChar.WhiteQueen]: "assets/pieces/white queen.svg",
  [FENChar.WhiteKing]: "assets/pieces/white king.svg",
  [FENChar.BlackPawn]: "assets/pieces/black pawn.svg",
  [FENChar.BlackRook]: "assets/pieces/black rook.svg",
  [FENChar.BlackBishop]: "assets/pieces/black bishop.svg",
  [FENChar.BlackKnight]: "assets/pieces/black knight.svg",
  [FENChar.BlackQueen]: "assets/pieces/black queen.svg",
  [FENChar.BlackKing]: "assets/pieces/black king.svg"
}