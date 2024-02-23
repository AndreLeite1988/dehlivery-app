

CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    preco NUMERIC(10, 2) NOT NULL,
    quantidade_estoque INTEGER NOT NULL
);

-- CREATE TABLE categorias ();
-- CREATE TABLE marcas ();
-- CREATE TABLE imagens ();

INSERT INTO produto (nome, preco, quantidade_estoque) VALUES
    ('Coca', 5.99, 100),
    ('Heineken', 10.99, 50),
    ('Brahma', 6.99, 60);
