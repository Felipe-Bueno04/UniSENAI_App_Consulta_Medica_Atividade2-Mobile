-- CreateTable
CREATE TABLE `consultas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_paciente` VARCHAR(200) NOT NULL,
    `data_hora_consulta` DATETIME(0) NOT NULL,
    `especialidade` ENUM('CARDIOLOGISTA', 'GERAL', 'PSIQUIATRIA', 'NEUROLOGISTA') NOT NULL,
    `nome_medico` VARCHAR(200) NOT NULL,
    `data_criacao` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
