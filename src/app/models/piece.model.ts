import { DetailPiece } from "./detail-piece.model"

export class Piece{
  constructor(
    public numPiece?: string,
    public typePiece?: string,
    public libellePiece?: string,
    public naturePiece?: string,
    public factureRCPNetanswer?: string,
    public factureBJMOD?: string,
    public dateExigibilitePiece?: string,
    public dateCreationPiece?: string,
    public debitPiece?: string,
    public creditPiece?: string,
    public detail?: DetailPiece[]
    ) { }
}