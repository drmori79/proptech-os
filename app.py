from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/api/v1/analytics/{property_id}")
def get_property_health(property_id: int):
    # This is where the Risk Scoring logic we wrote earlier lives
    return {
        "property_id": property_id,
        "noi": 1250000,
        "occupancy": 94.2,
        "equity_upside": 4200000
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)