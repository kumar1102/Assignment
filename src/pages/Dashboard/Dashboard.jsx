import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "../../components/Table/Table";
import Chart from "../../components/Chart/Chart";
import WorkIcon from "@mui/icons-material/Work";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import JobPhoto from "../../util/job.png";
import { Button, CardActions, CardMedia, Typography } from "@mui/material";
import Chart2 from "../../components/InsideChart/InsideChart";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          background: "#e3f1f1",
          width: "83vw",
          height: "40vh",
          border: "none",
          borderRadius: "5px",
          margin: "1rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            width: "50%",
            marginLeft: "2rem",
            fontSize: "25px",
          }}
        >
          <h3>Welcome back, Lewis</h3>
          <span>Here's what's changed in your talent hunt journey!</span>
          <br />
          <span>
            You can evaluate candidates, attract job seekers, and redefine the
            candidate experience for a new era of your workspace from here.
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "-200px",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          marginLeft: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "400px",
          }}
        >
          <Card variant="outlined" style={{borderRadius:"10px"}}>
            <CardContent>
              <div style={{ display: "flex", gap: "1rem", height: "120px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginLeft: "1rem",
                  }}
                >
                  <div>
                    <WorkIcon
                      style={{
                        fill: "#6499E3",
                        height: "30px",
                        width: "30px",
                        marginTop: "-10px",
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "50px", fontWeight: "bold" }}>
                      15
                    </div>
                    <div style={{ fontSize: "20px" }}> Total Jobs</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div>
                    <SwitchAccountIcon
                      style={{
                        fill: "blue",
                        height: "30px",
                        width: "30px",
                        marginTop: "-10px",
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "50px", fontWeight: "bold" }}>
                      1500
                    </div>
                    <div style={{ fontSize: "20px" }}> Applicants</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card variant="outlined" style={{borderRadius:"10px"}}>
            <CardContent>
              <div style={{ display: "flex", gap: "0.5rem", height: "120px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  <CreditCardIcon
                    style={{
                      fill: "#3E4C65",
                      height: "50px",
                      width: "50px",
                      marginTop: "-20px",
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "50px", fontWeight: "bold" }}>
                    20000
                  </div>
                  <div style={{ fontSize: "20px" }}> Applicants</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card variant="outlined" height="140" width="250" style={{borderRadius:"10px"}}>
          <CardContent>
            <Chart2 />
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500 }} style={{borderRadius:"10px"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            width="500"
            image={JobPhoto}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Private Job Board
            </Typography>
            <Typography variant="h6" sx={{ color: "text.secondary"}}>
              Your private job posting will appear here, accessible to the
              public via a company-specific URL.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flexBasis: "50%" }}>
          <div
            style={{
              background: "white",
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "10px",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <div style={{ marginBottom: "10px",fontSize:"20px",fontWeight:"bold" }}>Latest Candidates</div>
            <Table />
          </div>
        </div>
        <div
          style={{
            background: "white",
            border: "1px solid gray",
            padding: "10px",
            borderRadius: "10px",
            marginLeft: "1rem",
            marginTop: "1rem",
            width: "40vw",
          }}
        >
          <div style={{ marginBottom: "10px",fontSize:"20px",fontWeight:"bold"  }}>Your Job Posting</div>
          <Chart />
        </div>
      </div>
    </div>
  );
}
