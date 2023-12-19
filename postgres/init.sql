-- Change the password for the 'postgres' user
ALTER USER POSTGRES WITH PASSWORD 'postgres';

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
        DESCRIPTION VARCHAR(255) UNIQUE NOT NULL,
        ASSIGNED_TO VARCHAR(50) NOT NULL,
        STATUS_ID INTEGER NOT NULL,
        DEADLINE DATE NULL,
        CREATED_ON TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        LAST_UPDATE TIMESTAMP,
        CONSTRAINT fk_status FOREIGN KEY (STATUS_ID) REFERENCES STATUS(STATUS_ID)
    );