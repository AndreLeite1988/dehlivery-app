from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:pass@db:5432/postgres'
db = SQLAlchemy(app)

class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.Text, nullable=False)
    preco = db.Column(db.Numeric(10, 2), nullable=False)
    quantidade_estoque = db.Column(db.Integer, nullable=False)

from flask import jsonify

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    produtos = Produto.query.all()
    produtos_serializados = []
    for produto in produtos:
        produto_serializado = {
            'id': produto.id,
            'nome': produto.nome,
            'preco': str(produto.preco),  # Convertendo para string para evitar problemas com JSON serializável
            'quantidade_estoque': produto.quantidade_estoque
        }
        produtos_serializados.append(produto_serializado)
    return jsonify(produtos_serializados)

@app.route('/produtos/<int:id>', methods=['GET'])
def obter_produto(id):
    produto = Produto.query.get_or_404(id)
    produto_serializado = {
        'id': produto.id,
        'nome': produto.nome,
        'preco': str(produto.preco),  # Convertendo para string para evitar problemas com JSON serializável
        'quantidade_estoque': produto.quantidade_estoque
    }
    return jsonify(produto_serializado)

@app.route('/produtos', methods=['POST'])
def criar_produto():
    data = request.json
    produto = Produto(nome=data['nome'], preco=data['preco'], quantidade_estoque=data['quantidade_estoque'])
    db.session.add(produto)
    db.session.commit()
    produto_serializado = {
        'id': produto.id,
        'nome': produto.nome,
        'preco': str(produto.preco),  # Convertendo para string para evitar problemas com JSON serializável
        'quantidade_estoque': produto.quantidade_estoque
    }
    return jsonify(produto_serializado), 201

@app.route('/produtos/<int:id>', methods=['PUT'])
def atualizar_produto(id):
    produto = Produto.query.get_or_404(id)
    data = request.json
    produto.nome = data['nome']
    produto.preco = data['preco']
    produto.quantidade_estoque = data['quantidade_estoque']
    db.session.commit()
    produto_serializado = {
        'id': produto.id,
        'nome': produto.nome,
        'preco': str(produto.preco),  # Convertendo para string para evitar problemas com JSON serializável
        'quantidade_estoque': produto.quantidade_estoque
    }
    return jsonify(produto_serializado)

@app.route('/produtos/<int:id>', methods=['DELETE'])
def deletar_produto(id):
    produto = Produto.query.get_or_404(id)
    db.session.delete(produto)
    db.session.commit()
    return '', 204


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
