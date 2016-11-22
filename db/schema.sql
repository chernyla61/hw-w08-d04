DROP TABLE moviemix CASCADE;


CREATE TABLE moviemix (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  year VARCHAR,
  rated VARCHAR,
  poster VARCHAR,
  notes VARCHAR
);


