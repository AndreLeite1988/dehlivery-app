FROM python:3.11-slim

WORKDIR /app
RUN apt-get update && apt-get install -y build-essential libpq-dev

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]