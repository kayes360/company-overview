import React from "react";

export default function TableSection() {
  return (
    <section className="mt-5">
      <p className="table-section-title text-center">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit
      </p>

      <div className="table-responsive">
        <table className="table custom-table text-center">
          <thead className="thead">
            <tr className="thead-row">
              <td className="table-column-title">Source</td>
              <td className="table-column-title">Ad</td>
              <td className="table-column-title">Cost</td>
              <td className="table-column-title">Sales</td>
              <td className="table-column-title">First time customers</td>
              <td className="table-column-title">Revenue</td>
              <td className="table-column-title">ROAS</td>
              <td className="table-column-title">CAC</td>
              <td className="table-column-title">F.T. ROAS</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Youtube</td>
              <td>Male_18+_UGC_Video</td>
              <td>$2,567.00</td>
              <td>120</td>
              <td>90</td>
              <td>$10,800.00</td>
              <td style={{ background: "#93D1B5" }}>
                <strong>4.21</strong>
              </td>
              <td>$28.52</td>
              <td>3.16</td>
            </tr>
            <tr>
              <td>Adwords</td>
              <td>US_Generic_Search</td>
              <td>$1,233.00</td>
              <td>98</td>
              <td>71</td>
              <td>$5,880.00</td>
              <td style={{ background: "#93D1B5" }}>
                <strong>4.77</strong>
              </td>
              <td>$17.48</td>
              <td>3.43</td>
            </tr>
            <tr>
              <td>Adwords</td>
              <td>SKU2343_shoppong</td>
              <td>$3,120.00</td>
              <td>150</td>
              <td>127</td>
              <td>$14,700.00</td>
              <td style={{ background: "#93D1B5" }}>
                <strong>4.71</strong>
              </td>
              <td>$24.55</td>
              <td style={{ background: "#93D1B5" }}>3.99</td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>All_25+_Static_split_screen</td>
              <td>$5,400.00</td>
              <td>145</td>
              <td>111</td>
              <td>$11,600.00</td>
              <td>
                <strong>2.15</strong>
              </td>
              <td>$48.54</td>
              <td>1.65</td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td>W_25+_Static_split_screen</td>
              <td>$3,210.00</td>
              <td>280</td>
              <td>177</td>
              <td>$23,800.00</td>
              <td style={{ background: "#64B992" }}>
                <strong>7.41</strong>
              </td>
              <td>$18.17</td>
              <td style={{ background: "#64B992" }}>4.68</td>
            </tr>
            <tr>
              <td>TikTok</td>
              <td>UGS_video_2</td>
              <td>$3,100.00</td>
              <td>120</td>
              <td>110</td>
              <td>$7,080.00</td>
              <td>
                <strong>2.28</strong>
              </td>
              <td>$28.14</td>
              <td>2.10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
