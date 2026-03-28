CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    total_sqft FLOAT,
    cap_rate FLOAT
);

CREATE TABLE leases (
    id SERIAL PRIMARY KEY,
    property_id INT REFERENCES properties(id),
    tenant_name TEXT,
    sqft FLOAT,
    base_rent FLOAT,
    start_date DATE,
    end_date DATE,
    risk_score INT DEFAULT 0
);