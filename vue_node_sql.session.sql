SELECT * from tutorials;

--@BLOCK
INSERT INTO tutorials(title,description,published) 
VALUES ('python','program languge',true),
('java','program languge',true);

--@BLOCK
ALTER TABLE tutorials 
MODIFY published BOOLEAN DEFAULT true;