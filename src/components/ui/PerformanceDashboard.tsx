import React from "react";
import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import { Icon3 } from "./icons/Icon3";
import { Icon4 } from "./icons/Icon4";
import { Icon5 } from "./icons/Icon5";

export function PerformanceDashboard() {
  return (
    <>
      <style>{`
        .performance-dashboard div {
          box-sizing: border-box;
        }
        .performance-dashboard h2 {
          box-sizing: border-box;
          font-family: "Square Sans Display VF", "Square Sans Display", Helvetica, Arial, sans-serif;
          font-size: 19px;
          font-weight: 700;
          line-height: 26px;
          letter-spacing: normal;
          text-transform: none;
        }
        .performance-dashboard span {
          box-sizing: border-box;
        }
        .performance-dashboard p {
          font-weight: 400;
          font-size: 14px;
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica, Arial, sans-serif;
          line-height: 22px;
          letter-spacing: normal;
          text-transform: none;
          box-sizing: border-box;
          margin-top: 0px;
          color: rgba(0, 0, 0, 0.55);
        }
        .performance-dashboard a {
          box-sizing: border-box;
          cursor: pointer;
          color: rgb(0, 90, 217);
          text-decoration: none;
        }
        .performance-dashboard h3 {
          font-weight: 700;
          font-size: 19px;
          font-family: "Square Sans Display VF", "Square Sans Display", Helvetica, Arial, sans-serif;
          line-height: 26px;
          letter-spacing: normal;
          text-transform: none;
          box-sizing: border-box;
          border: 0px none rgba(0, 0, 0, 0.9);
          padding: 0px;
          margin: 0px 0px 2px 0px;
        }
      `}</style>
      <div
        className="performance-dashboard"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.03)",
          marginTop: "24px",
          borderRadius: "16px",
          padding: "16px 16px 8px 16px",
          width: "100%",
          color: "rgb(26, 26, 26)",
          fontSize: "14px",
          lineHeight: "22px",
          fontFamily:
            '"Square Sans Text VF", "Square Sans Text", Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            visibility: "visible",
            boxSizing: "border-box",
            minHeight: "40px",
          }}
        >
          <h2
            style={{
              border: "0px none rgb(26, 26, 26)",
              padding: "0px 0px 0px 8px",
              margin: "7px 0px 7px 0px",
            }}
          >
            Performance
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            top: "0px",
            minHeight: "0px",
            padding: "8px 0px 12px 8px",
          }}
        >
          <div
            style={{
              overflowX: "scroll",
              display: "flex",
              rowGap: "8px",
              columnGap: "8px",
              height: "42px",
              scrollbarWidth: "none",
            }}
          >
            <div style={{}}>
              <div
                style={{
                  visibility: "visible",
                  boxSizing: "border-box",
                  minWidth: "80px",
                  minHeight: "42px",
                  backgroundColor: "white",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <label
                  style={{ 
                    boxSizing: "border-box", 
                    cursor: "pointer",
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.55)"
                  }}
                >
                  Date
                </label>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Jul 18
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "0px none rgb(26, 26, 26)",
            margin: "8px 0px 8px 0px",
          }}
        >
          <div
            style={{
              paddingBottom: "0px",
              marginBottom: "0px",
              borderBottom: "0px none rgb(26, 26, 26)",
            }}
          >
            <div
              style={{
                color: "rgba(0, 0, 0, 0.9)",
                fontWeight: "400",
                fontFamily:
                  '"Square Sans Text VF", "Square Sans Text", Helvetica, Arial, sans-serif',
                fontSynthesisWeight: "none",
                fontSynthesisStyle: "none",
                fontSynthesisSmallCaps: "none",
                WebkitFontSmoothing: "antialiased",
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "none",
                position: "static",
                borderRadius: "12px",
                padding: "24px",
                margin: "0px",
              }}
            >
              <div style={{ padding: "0px 8px 16px 0px" }}>
                <h2
                  style={{
                    border: "0px none rgba(0, 0, 0, 0.9)",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  Key Metrics
                </h2>
                <p style={{ marginBottom: "0px" }}>vs. Prior Friday</p>
              </div>

              <div
                style={{
                  display: "grid",
                  columnGap: "32px",
                  rowGap: "16px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                }}
              >
                <a
                  href="/dashboard/sales/reports/sales-summary"
                  style={{
                    marginLeft: "-8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "12px 8px 12px 8px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ display: "flex", height: "22px" }}>
                      <p style={{ marginBottom: "0px" }}>Net Sales</p>
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.9)",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      $0.00
                    </div>
                  </div>
                  <div style={{ minHeight: "28px" }}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "22px",
                        letterSpacing: "normal",
                        textTransform: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(0, 0, 0, 0)",
                        borderRadius: "6px",
                        padding: "2px 8px 2px 8px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Icon1 style={{}} />
                      N/A
                    </div>
                  </div>
                </a>

                <a
                  href="/dashboard/sales/reports/sales-summary"
                  style={{
                    marginLeft: "-8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "12px 8px 12px 8px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ display: "flex", height: "22px" }}>
                      <p style={{ marginBottom: "0px" }}>Gross Sales</p>
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.9)",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      $0.00
                    </div>
                  </div>
                  <div style={{ minHeight: "28px" }}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "22px",
                        letterSpacing: "normal",
                        textTransform: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(0, 0, 0, 0)",
                        borderRadius: "6px",
                        padding: "2px 8px 2px 8px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Icon2 style={{}} />
                      N/A
                    </div>
                  </div>
                </a>

                <a
                  href="/dashboard/sales/transactions"
                  style={{
                    marginLeft: "-8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "12px 8px 12px 8px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ display: "flex", height: "22px" }}>
                      <p style={{ marginBottom: "0px" }}>Transactions</p>
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.9)",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      0
                    </div>
                  </div>
                  <div style={{ minHeight: "28px" }}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "22px",
                        letterSpacing: "normal",
                        textTransform: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(0, 0, 0, 0)",
                        borderRadius: "6px",
                        padding: "2px 8px 2px 8px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Icon3 style={{}} />
                      N/A
                    </div>
                  </div>
                </a>

                <a
                  href="/dashboard/sales/reports/sales-summary"
                  style={{
                    marginLeft: "-8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "12px 8px 12px 8px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ display: "flex", height: "22px" }}>
                      <p style={{ marginBottom: "0px" }}>Average Net Sale</p>
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.9)",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      $0.00
                    </div>
                  </div>
                  <div style={{ minHeight: "28px" }}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "22px",
                        letterSpacing: "normal",
                        textTransform: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(0, 0, 0, 0)",
                        borderRadius: "6px",
                        padding: "2px 8px 2px 8px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Icon4 style={{}} />
                      N/A
                    </div>
                  </div>
                </a>

                <a
                  href="/dashboard/sales/transactions"
                  style={{
                    marginLeft: "-8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "12px 8px 12px 8px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ display: "flex", height: "22px" }}>
                      <p style={{ marginBottom: "0px" }}>Returns and Refunds</p>
                    </div>
                    <div
                      style={{
                        color: "rgba(0, 0, 0, 0.9)",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      $0.00
                    </div>
                  </div>
                  <div style={{ minHeight: "28px" }}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "22px",
                        letterSpacing: "normal",
                        textTransform: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(0, 0, 0, 0)",
                        borderRadius: "6px",
                        padding: "2px 8px 2px 8px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Icon5 style={{}} />
                      N/A
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            columnGap: "24px",
            rowGap: "24px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "12px",
              padding: "24px",
              height: "356px",
            }}
          >
            <h3 style={{}}>Customers</h3>
            <div style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 8px", borderRadius: "6px" }}>
                <span style={{ fontWeight: "500", fontSize: "14px" }}>Total customers</span>
                <span>0</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 8px", borderRadius: "6px" }}>
                <span style={{ fontWeight: "500", fontSize: "14px" }}>Returning customers</span>
                <span>0</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 8px", borderRadius: "6px" }}>
                <span style={{ fontWeight: "500", fontSize: "14px" }}>Avg. visits per customer</span>
                <span>0</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 8px", borderRadius: "6px" }}>
                <span style={{ fontWeight: "500", fontSize: "14px" }}>Avg. spent per visit</span>
                <span>$0.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 8px", borderRadius: "6px" }}>
                <span style={{ fontWeight: "500", fontSize: "14px" }}>Feedback</span>
                <span>0 positive, 0 negative</span>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "12px",
              padding: "24px",
              height: "356px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <h3 style={{}}>Payment Types</h3>
              <p style={{ marginBottom: "16px" }}>by Payment amount</p>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                <div style={{ height: "48px", flex: 1, backgroundColor: "rgb(0, 106, 255)", borderRadius: "4px" }}></div>
                <div style={{ height: "48px", flex: 1, backgroundColor: "rgb(204, 225, 255)", borderRadius: "4px" }}></div>
                <div style={{ height: "48px", flex: 1, backgroundColor: "rgb(229, 240, 255)", borderRadius: "4px" }}></div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "14px", height: "14px", backgroundColor: "rgb(0, 106, 255)", borderRadius: "20%" }}></div>
                    <span style={{ fontWeight: "500", fontSize: "14px" }}>Card</span>
                  </div>
                  <span>$0.00</span>
                  <span style={{ color: "rgba(0, 0, 0, 0.55)", fontSize: "14px" }}>0%</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "14px", height: "14px", backgroundColor: "rgb(204, 225, 255)", borderRadius: "20%" }}></div>
                    <span style={{ fontWeight: "500", fontSize: "14px" }}>Cash</span>
                  </div>
                  <span>$0.00</span>
                  <span style={{ color: "rgba(0, 0, 0, 0.55)", fontSize: "14px" }}>0%</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "14px", height: "14px", backgroundColor: "rgb(229, 240, 255)", borderRadius: "20%" }}></div>
                    <span style={{ fontWeight: "500", fontSize: "14px" }}>Other</span>
                  </div>
                  <span>$0.00</span>
                  <span style={{ color: "rgba(0, 0, 0, 0.55)", fontSize: "14px" }}>0%</span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "12px",
              padding: "24px",
              height: "356px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <h3 style={{}}>Items</h3>
              <p style={{ marginBottom: "16px" }}>by Gross sales</p>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ display: "flex", gap: "4px", height: "80px", alignItems: "flex-end", marginBottom: "8px" }}>
                {Array.from({ length: 11 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: "4px",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(0, 0, 0, 0.55)" }}>
                <span>Lowest</span>
                <span>Highest</span>
              </div>
            </div>
            
            <div style={{ marginTop: "16px" }}>
              <p style={{ marginBottom: "0px" }}>No sales in this time period</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}