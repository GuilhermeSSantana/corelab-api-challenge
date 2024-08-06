-- CreateTable
CREATE TABLE "blocoNotas" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "favoritos" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blocoNotas_pkey" PRIMARY KEY ("id")
);
