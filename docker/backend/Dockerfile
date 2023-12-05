FROM python:3.10.12

SHELL ["/bin/bash", "-c"]

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
EXPOSE 8000

RUN pip install --upgrade pip

WORKDIR /backend

COPY requirements.txt .

RUN pip install -r requirements.txt
RUN pip install gunicorn

COPY /backend .

# CMD ["gunicorn","-b","0.0.0.0:8000","backend.wsgi:application"]