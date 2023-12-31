-- Drop the table 'Status' if it exists
DROP TABLE IF EXISTS STATUS;

-- Drop the table 'TASKS' if it exists
DROP TABLE IF EXISTS TASKS;

-- Create the 'Status' table
CREATE TABLE
    STATUS (
        STATUS_ID SERIAL PRIMARY KEY,
        STATUS_NAME VARCHAR(20) UNIQUE NOT NULL
    );

-- Create the 'TASKS' table with a foreign key reference to the 'STATUS' table
CREATE TABLE
    TASKS (
        TASK_ID SERIAL PRIMARY KEY,
        TASK_NAME VARCHAR(50) UNIQUE NOT NULL,
        DESCRIPTION VARCHAR(255) NOT NULL,
        ASSIGNED_TO VARCHAR(50) NOT NULL,
        STATUS_ID INTEGER NOT NULL,
        DEADLINE DATE NULL,
        CREATED_ON TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        LAST_UPDATE TIMESTAMP,
        CONSTRAINT fk_status FOREIGN KEY (STATUS_ID) REFERENCES STATUS(STATUS_ID)
    );


-- Insert sample data into the 'STATUS' table
INSERT INTO STATUS (STATUS_NAME) VALUES ('Open');
INSERT INTO STATUS (STATUS_NAME) VALUES ('In Progress');
INSERT INTO STATUS (STATUS_NAME) VALUES ('On Hold');
INSERT INTO STATUS (STATUS_NAME) VALUES ('Cancelled');
INSERT INTO STATUS (STATUS_NAME) VALUES ('Completed');
INSERT INTO STATUS (STATUS_NAME) VALUES ('Closed');

-- Insert sample data into the 'TASKS' table
INSERT INTO TASKS (TASK_NAME, DESCRIPTION, ASSIGNED_TO, STATUS_ID, DEADLINE) 
VALUES ('Task 1', 'This is task 1', '77878294-0bff-449d-963b-4a5c3b74cfdb', 2, '2022-12-31');

INSERT INTO TASKS (TASK_NAME, DESCRIPTION, ASSIGNED_TO, STATUS_ID, DEADLINE) 
VALUES ('Task 2', 'This is task 2', '77878294-0bff-449d-963b-4a5c3b74cfdb', 3, '2023-01-31');

INSERT INTO TASKS (TASK_NAME, DESCRIPTION, ASSIGNED_TO, STATUS_ID, DEADLINE) 
VALUES ('Task 3', 'This is task 3', '77878294-0bff-449d-963b-4a5c3b74cfdb', 4, '2023-02-28');

INSERT INTO TASKS (TASK_NAME, DESCRIPTION, ASSIGNED_TO, STATUS_ID, DEADLINE)
VALUES ('Task 4', 'This is task 4', '77878294-0bff-449d-963b-4a5c3b74cfdb', 5, '2023-03-31');

INSERT INTO TASKS (TASK_NAME, DESCRIPTION, ASSIGNED_TO, STATUS_ID, DEADLINE)
VALUES ('Task 5', 'This is task 5', '77878294-0bff-449d-963b-4a5c3b74cfdb', 6, '2023-04-30');

INSERT INTO TASKS (TASK_NAME, DESCRIPTION, ASSIGNED_TO, STATUS_ID, DEADLINE)
VALUES ('Task 6', 'This is task 6', '77878294-0bff-449d-963b-4a5c3b74cfdb', 1, '2023-05-31');