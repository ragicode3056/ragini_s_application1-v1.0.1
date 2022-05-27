import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const MedicaluniversalPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-montserrat mx-[auto] w-[100%]">
        <Column className="w-[100%]">
          <Stack className="bg-gray_50 border border-black_900 border-solid lg:h-[567px] xl:h-[649px] h-[729px] 2xl:h-[730px] 3xl:h-[876px] w-[100%]">
            <Image
              src="img_hero3coverse.png"
              className="absolute lg:h-[567px] xl:h-[649px] h-[729px] 2xl:h-[730px] 3xl:h-[876px] inset-[0] object-cover w-[100%]"
              alt="hero3coverse"
            />
            <Column className="absolute bg-gradient  inset-[0] items-center justify-start w-[100%]">
              <Row className="items-center justify-start mx-[auto] w-[92%]">
                <Button className="bg-white_A700 border border-black_900 border-solid font-bold lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:ml-[105px] xl:ml-[120px] ml-[136px] 3xl:ml-[163px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] pl-[0] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] shadow-bs text-bluegray_900 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[14%]">{`BrandName`}</Button>
                <Row className="items-center justify-center lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[21%]">
                  <Text className="font-bold text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1">{`Home`}</Text>
                  <Text className="font-bold lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1">{`Product`}</Text>
                  <Text className="font-bold lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1">{`Pricing`}</Text>
                  <Text className="font-bold lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1">{`Contact`}</Text>
                </Row>
                <Row className="items-center justify-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[186px] xl:ml-[213px] ml-[240px] 3xl:ml-[288px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] w-[23%]">
                  <Text className="font-bold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-right tracking-ls1">{`Login`}</Text>
                  <div className="3xl:ml-[54px] 3xl:mr-[92px] lg:ml-[35px] lg:mr-[59px] ml-[45px] mr-[77px] w-[46%] xl:ml-[40px] xl:mr-[68px] input-wrap">
                    <Image
                      src="img_vector.svg"
                      className="absolute right-[25px] lg:right-[19px] xl:right-[22px] 3xl:right-[30px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Button className="bg-deep_orange_400 font-bold lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:pr-[57px] xl:pr-[65px] pr-[74px] 3xl:pr-[88px] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius5 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 tracking-ls1 w-[100%]">{`JOIN US`}</Button>
                  </div>
                </Row>
              </Row>
              <Column className="items-start justify-start lg:mb-[110px] xl:mb-[126px] mb-[142px] 3xl:mb-[170px] xl:mt-[111px] mt-[125px] 3xl:mt-[150px] lg:mt-[97px] mx-[auto] w-[73%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-deep_orange_400 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Welcome`}</Text>
                <Text className="font-bold lg:leading-lh62 xl:leading-lh71 2xl:leading-lh80 leading-lh8000 3xl:leading-lh96 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] text-bluegray_900 lg:text-fs45 xl:text-fs51 text-fs58 3xl:text-fs69 text-left tracking-ls1 w-[54%]">{`A Great Place to Receive Care`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] not-italic lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_600 text-left tracking-ls1">{`Overcame any hurdle or any other problem.`}</Text>
                <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[29%]">
                  <Button className="bg-deep_orange_400 font-bold lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius5 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[44%]">{`Join Us`}</Button>
                  <Button className="border border-deep_orange_400 border-solid font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius5 text-center text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[53%]">{`Learn More`}</Button>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Column className="bg-white_A700 items-start justify-start w-[100%]">
            <Column className="items-start justify-start mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] lg:mx-[154px] xl:mx-[176px] mx-[198px] 3xl:mx-[237px] w-[48%]">
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Practice Advice`}</Text>
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left tracking-ls1">{`See Our Impressions`}</Text>
              <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[68%]">
                {
                  <>
                    {`Problems trying to resolve the conflict between `}
                    <br />
                    {`the two major realms of Classical physics: Newtonian mechanics`}
                  </>
                }
              </Text>
            </Column>
            <Column className="items-center xl:mb-[103px] mb-[116px] 3xl:mb-[139px] lg:mb-[90px] mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] w-[100%]">
              <List
                className="lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-4 min-h-[auto] mx-[auto] w-[73%]"
                orientation="horizontal"
              >
                <Column className="bg-deep_orange_400 hover:cursor-pointer items-start justify-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] hover:shadow-bs1 w-[100%]">
                  <Image
                    src="img_iconcoolicon.svg"
                    className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="iconcoolicon"
                  />
                  <Text className="font-bold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Cancer Care`}</Text>
                  <Line className="bg-red_600 h-[2px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] w-[21%]" />
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[55%]">
                    {
                      <>
                        {`The gradual `}
                        <br />
                        {`accumulation of `}
                        <br />
                        {`information about`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="bg-deep_orange_400 hover:cursor-pointer items-start justify-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] hover:shadow-bs1 w-[100%]">
                  <Image
                    src="img_iconcoolicon_1.svg"
                    className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="iconcoolicon"
                  />
                  <Text className="font-bold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Book now`}</Text>
                  <Line className="bg-red_600 h-[2px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] w-[21%]" />
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[55%]">
                    {
                      <>
                        {`The gradual `}
                        <br />
                        {`accumulation of `}
                        <br />
                        {`information about`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="bg-deep_orange_400 hover:cursor-pointer items-start justify-center lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] hover:shadow-bs1 w-[100%]">
                  <Image
                    src="img_iconcoolicon_2.svg"
                    className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="iconcoolicon"
                  />
                  <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="font-bold mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1">{`Quick examination`}</Text>
                  </Column>
                  <Line className="bg-white_A700 h-[2px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] w-[21%]" />
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 tracking-ls1 w-[57%]">
                    {
                      <>
                        {`The gradual `}
                        <br />
                        {`information about `}
                        <br />
                        {`atomic behaviour...`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="bg-deep_orange_400 hover:cursor-pointer items-start justify-center lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:py-[27px] xl:py-[31px] py-[35px] 3xl:py-[42px] hover:shadow-bs1 w-[100%]">
                  <Image
                    src="img_iconcoolicon_3.svg"
                    className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[56px] xl:w-[64px] w-[72px] 3xl:w-[86px]"
                    alt="iconcoolicon"
                  />
                  <Text className="font-bold lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Emergency Case`}</Text>
                  <Line className="bg-red_600 h-[2px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] w-[21%]" />
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[55%]">
                    {
                      <>
                        {`The gradual `}
                        <br />
                        {`accumulation of `}
                        <br />
                        {`information about`}
                      </>
                    }
                  </Text>
                </Column>
              </List>
            </Column>
          </Column>
          <Row className="bg-white_A700 items-center justify-start w-[100%]">
            <Column className="items-start lg:mb-[145px] xl:mb-[165px] mb-[186.5px] 2xl:mb-[186px] 3xl:mb-[223px] lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] lg:mt-[150px] xl:mt-[172px] mt-[193.5px] 2xl:mt-[193px] 3xl:mt-[232px] w-[35%]">
              <div className="bg-red_600 lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[19%]"></div>
              <Text className="font-bold lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] text-bluegray_900 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left tracking-ls1 w-[67%]">
                {
                  <>
                    {`Our Doctors `}
                    <br />
                    {`Specialize in you`}
                  </>
                }
              </Text>
              <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[69%]">
                {
                  <>
                    {`Problems trying to resolve the conflict between `}
                    <br />
                    {`the two major realms of Classical physics: `}
                    <br />
                    {`Newtonian mechanics`}
                  </>
                }
              </Text>
              <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[20%]">
                <Text className="font-bold text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Learn More`}</Text>
                <Image
                  src="img_iconarrownext.svg"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[9%]"
                  alt="iconarrownext"
                />
              </Row>
            </Column>
            <Stack className="bg-white_A700 lg:h-[283px] xl:h-[323px] h-[363px] 2xl:h-[364px] 3xl:h-[436px] lg:mb-[119px] xl:mb-[136px] mb-[153px] 3xl:mb-[183px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] rounded-radius20 w-[36%]">
              <Image
                src="img_features11vid.png"
                className="absolute lg:h-[283px] xl:h-[323px] h-[363px] 2xl:h-[364px] 3xl:h-[436px] inset-[0] object-contain w-[100%]"
                alt="features11vid"
              />
              <Column className="absolute bg-gradient1  inset-[0] items-center justify-center w-[100%]">
                <Image
                  src="img_buttonbuttonb.svg"
                  className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] h-[92.6px] 2xl:h-[93px] lg:mb-[104px] xl:mb-[119px] mb-[134.4px] 2xl:mb-[134px] 3xl:mb-[161px] lg:mt-[105px] xl:mt-[120px] mt-[136px] 3xl:mt-[163px] mx-[auto] object-contain rounded-radius736 w-[92.6px]"
                  alt="buttonbuttonb"
                />
              </Column>
            </Stack>
          </Row>
          <Row className="bg-white_A700 items-center justify-start w-[100%]">
            <Stack className="lg:h-[466px] xl:h-[533px] h-[599px] 2xl:h-[600px] 3xl:h-[720px] xl:mb-[100px] mb-[113px] 3xl:mb-[135px] lg:mb-[87px] lg:ml-[153px] xl:ml-[175px] ml-[197.5px] 2xl:ml-[197px] 3xl:ml-[237px] lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[38%]">
              <div className="absolute bg-deep_orange_200 bottom-[8%] lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] left-[9%] rounded-radius50 lg:w-[45px] xl:w-[52px] w-[59px] 3xl:w-[70px]"></div>
              <Stack className="absolute lg:h-[466px] xl:h-[533px] h-[599px] 2xl:h-[600px] 3xl:h-[720px] inset-[0] w-[100%]">
                <Image
                  src="img_rectangle1.svg"
                  className="absolute lg:h-[108px] xl:h-[123px] h-[138px] 2xl:h-[139px] 3xl:h-[166px] object-contain right-[0] top-[0] w-[21%]"
                  alt="Rectangle1"
                />
                <Image
                  src="img_rectangle1_1.png"
                  className="absolute lg:h-[394px] xl:h-[451px] h-[506px] 2xl:h-[507px] 3xl:h-[608px] object-contain right-[6%] rounded-radius10 top-[5%] w-[78%]"
                  alt="Rectangle1"
                />
                <Image
                  src="img_rectangle1_2.png"
                  className="absolute bottom-[0] lg:h-[194px] xl:h-[222px] h-[249px] 2xl:h-[250px] 3xl:h-[299px] left-[0] object-contain rounded-radius10 w-[50%]"
                  alt="Rectangle1"
                />
              </Stack>
            </Stack>
            <Column className="items-start lg:mb-[225px] xl:mb-[257px] mb-[289.5px] 2xl:mb-[289px] 3xl:mb-[347px] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[261px] xl:mt-[299px] mt-[336.5px] 2xl:mt-[336px] 3xl:mt-[404px] w-[26%]">
              <div className="bg-red_600 lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[25%]"></div>
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] text-bluegray_900 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left tracking-ls1">{`Leading Medicine`}</Text>
              <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[92%]">
                {
                  <>
                    {`Problems trying to resolve the conflict between `}
                    <br />
                    {`the two major realms of Classical physics: `}
                    <br />
                    {`Newtonian mechanics`}
                  </>
                }
              </Text>
              <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[27%]">
                <Text className="font-bold text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Learn More`}</Text>
                <Image
                  src="img_iconarrownext_1.svg"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[9%]"
                  alt="iconarrownext"
                />
              </Row>
            </Column>
          </Row>
          <Column className="bg-white_A700 items-start justify-start w-[100%]">
            <Column className="items-start justify-start mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] lg:mx-[154px] xl:mx-[176px] mx-[198px] 3xl:mx-[237px] w-[48%]">
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Courses`}</Text>
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left tracking-ls1">{`Our Products`}</Text>
              <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[68%]">
                {
                  <>
                    {`Problems trying to resolve the conflict between `}
                    <br />
                    {`the two major realms of Classical physics: Newtonian mechanics`}
                  </>
                }
              </Text>
            </Column>
            <Column className="items-center lg:mb-[130px] xl:mb-[149px] mb-[168px] 3xl:mb-[201px] mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] w-[100%]">
              <List
                className="xl:gap-[3px] lg:gap-[3px] gap-[4px] grid grid-cols-4 min-h-[auto] mx-[auto] w-[73%]"
                orientation="horizontal"
              >
                <Stack className="lg:h-[487px] xl:h-[557px] h-[626px] 2xl:h-[627px] 3xl:h-[752px] w-[100%]">
                  <Stack className="absolute bg-white_A700 lg:h-[487px] xl:h-[557px] h-[626px] 2xl:h-[627px] 3xl:h-[752px] left-[0] w-[90%]">
                    <Image
                      src="img_productcover1.png"
                      className="absolute lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] object-cover top-[0] w-[100%]"
                      alt="productcover1"
                    />
                    <Column className="absolute items-start justify-start left-[8%] top-[3%] w-[71%]">
                      <Button className="bg-red_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius3 shadow-bs2 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[30%]">{`Sale`}</Button>
                      <Column className="items-end lg:mt-[149px] xl:mt-[170px] mt-[192px] 3xl:mt-[230px] w-[100%]">
                        <Image
                          src="img_productactions.svg"
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[83%]"
                          alt="productactions"
                        />
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="absolute bottom-[0] items-start justify-center w-[100%]">
                    <Column className="items-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Row className="items-center justify-start mx-[auto] w-[81%]">
                        <Text className="font-bold my-[1px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Best dental surgeons`}</Text>
                        <div className="3xl:ml-[12px] lg:ml-[7px] ml-[10px] w-[23%] xl:ml-[8px] input-wrap">
                          <Image
                            src="img_vector_1.svg"
                            className="absolute left-[5.5px] lg:left-[4px] xl:left-[4px] 2xl:left-[5px] 3xl:left-[6px] my-[auto] inset-y-[0]"
                            alt="Vector"
                          />
                          <Button className="bg-bluegray_800 font-normal not-italic lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] xl:py-[6px] lg:py-[6px] py-[7.75px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius20 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 tracking-ls1 w-[100%]">{`4.9`}</Button>
                        </div>
                      </Row>
                    </Column>
                    <Text className="font-bold lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[50%]">{`sit amet nulla facilisi morbi`}</Text>
                    <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[69%]">
                      {
                        <>
                          {`We focus on ergonomics `}
                          <br />
                          {`and meeting you....`}
                        </>
                      }
                    </Text>
                    <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[31%]">
                      <Image
                        src="img_framesec.svg"
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                        alt="Framesec"
                      />
                      <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`15 Sales`}</Text>
                    </Row>
                    <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[41%]">
                      <Text className="font-bold xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_400 tracking-ls1">{`$16.48`}</Text>
                      <Text className="font-bold lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-blue_A700 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`$6.48`}</Text>
                    </Row>
                    <div className="3xl:mb-[42px] 3xl:mt-[12px] 3xl:mx-[30px] lg:mb-[27px] lg:mt-[7px] lg:mx-[19px] mb-[35px] mt-[10px] mx-[25px] w-[53%] xl:mb-[31px] xl:mt-[8px] xl:mx-[22px] input-wrap">
                      <Image
                        src="img_vector_2.svg"
                        className="absolute right-[20px] lg:right-[15px] xl:right-[17px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Button className="border border-deep_orange_400 border-solid font-bold lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[45px] xl:pr-[51px] pr-[58.27999999999999px] 2xl:pr-[58px] 3xl:pr-[69px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius37 text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[100%]">{`Learn More`}</Button>
                    </div>
                  </Column>
                </Stack>
                <Stack className="lg:h-[487px] xl:h-[557px] h-[626px] 2xl:h-[627px] 3xl:h-[752px] w-[100%]">
                  <Stack className="absolute bg-white_A700 lg:h-[487px] xl:h-[557px] h-[626px] 2xl:h-[627px] 3xl:h-[752px] left-[0] w-[96%]">
                    <Image
                      src="img_productcover1_1.png"
                      className="absolute lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] object-cover top-[0] w-[100%]"
                      alt="productcover1"
                    />
                    <Column className="absolute items-start justify-start left-[8%] top-[3%] w-[71%]">
                      <Button className="bg-red_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius3 shadow-bs2 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[30%]">{`Sale`}</Button>
                      <Column className="items-end lg:mt-[149px] xl:mt-[170px] mt-[192px] 3xl:mt-[230px] w-[100%]">
                        <Image
                          src="img_productactions_1.svg"
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[82%]"
                          alt="productactions"
                        />
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="absolute bottom-[0] items-start justify-center w-[100%]">
                    <Column className="items-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Row className="items-center justify-start mx-[auto] w-[80%]">
                        <Text className="font-bold my-[1px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Online Appoinment`}</Text>
                        <div className="3xl:ml-[12px] lg:ml-[7px] ml-[10px] w-[25%] xl:ml-[8px] input-wrap">
                          <Image
                            src="img_vector_3.svg"
                            className="absolute left-[5.5px] lg:left-[4px] xl:left-[4px] 2xl:left-[5px] 3xl:left-[6px] my-[auto] inset-y-[0]"
                            alt="Vector"
                          />
                          <Button className="bg-bluegray_800 font-normal not-italic lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] xl:py-[6px] lg:py-[6px] py-[7.75px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius20 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 tracking-ls1 w-[100%]">{`4.9`}</Button>
                        </div>
                      </Row>
                    </Column>
                    <Text className="font-bold lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[52%]">{`bibendum arcu vitae`}</Text>
                    <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[72%]">
                      {
                        <>
                          {`We focus on ergonomics `}
                          <br />
                          {`and meeting you....`}
                        </>
                      }
                    </Text>
                    <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[33%]">
                      <Image
                        src="img_framesec_1.svg"
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                        alt="Framesec"
                      />
                      <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`15 Sales`}</Text>
                    </Row>
                    <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[43%]">
                      <Text className="font-bold xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_400 tracking-ls1">{`$16.48`}</Text>
                      <Text className="font-bold lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-blue_A700 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`$6.48`}</Text>
                    </Row>
                    <div className="3xl:mb-[42px] 3xl:mt-[12px] 3xl:mx-[30px] lg:mb-[27px] lg:mt-[7px] lg:mx-[19px] mb-[35px] mt-[10px] mx-[25px] w-[56%] xl:mb-[31px] xl:mt-[8px] xl:mx-[22px] input-wrap">
                      <Image
                        src="img_vector_4.svg"
                        className="absolute right-[20px] lg:right-[15px] xl:right-[17px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Button className="border border-deep_orange_400 border-solid font-bold lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[45px] xl:pr-[51px] pr-[58.27999999999999px] 2xl:pr-[58px] 3xl:pr-[69px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius37 text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[100%]">{`Learn More`}</Button>
                    </div>
                  </Column>
                </Stack>
                <Column className="bg-white_A700 items-start justify-start w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Stack className="lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] w-[100%]">
                      <Image
                        src="img_productcover1_2.png"
                        className="absolute lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] inset-[0] object-cover w-[100%]"
                        alt="productcover1"
                      />
                      <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[8%] my-[auto] w-[71%]">
                        <Button className="bg-red_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius3 shadow-bs2 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[30%]">{`Sale`}</Button>
                        <Column className="items-end lg:mt-[149px] xl:mt-[170px] mt-[192px] 3xl:mt-[230px] w-[100%]">
                          <Image
                            src="img_productactions_2.svg"
                            className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[82%]"
                            alt="productactions"
                          />
                        </Column>
                      </Column>
                    </Stack>
                    <Row className="items-center justify-start lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] w-[76%]">
                      <Text className="font-bold my-[1px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Health Queries`}</Text>
                      <div className="3xl:ml-[27px] lg:ml-[17px] ml-[23px] w-[27%] xl:ml-[20px] input-wrap">
                        <Image
                          src="img_vector_5.svg"
                          className="absolute left-[5.5px] lg:left-[4px] xl:left-[4px] 2xl:left-[5px] 3xl:left-[6px] my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Button className="bg-bluegray_800 font-normal not-italic lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] xl:py-[6px] lg:py-[6px] py-[7.75px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius20 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 tracking-ls1 w-[100%]">{`4.9`}</Button>
                      </div>
                    </Row>
                  </Column>
                  <Text className="font-bold lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[55%]">{`magna fringilla urna porttitor`}</Text>
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[76%]">
                    {
                      <>
                        {`We focus on ergonomics `}
                        <br />
                        {`and meeting you....`}
                      </>
                    }
                  </Text>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[35%]">
                    <Image
                      src="img_framesec_2.svg"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Framesec"
                    />
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`15 Sales`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[45%]">
                    <Text className="font-bold xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_400 tracking-ls1">{`$16.48`}</Text>
                    <Text className="font-bold lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-blue_A700 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`$6.48`}</Text>
                  </Row>
                  <div className="3xl:mb-[42px] 3xl:mt-[12px] 3xl:mx-[30px] lg:mb-[27px] lg:mt-[7px] lg:mx-[19px] mb-[35px] mt-[10px] mx-[25px] w-[59%] xl:mb-[31px] xl:mt-[8px] xl:mx-[22px] input-wrap">
                    <Image
                      src="img_vector_6.svg"
                      className="absolute right-[20px] lg:right-[15px] xl:right-[17px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Button className="border border-deep_orange_400 border-solid font-bold lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[45px] xl:pr-[51px] pr-[58.27999999999999px] 2xl:pr-[58px] 3xl:pr-[69px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius37 text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[100%]">{`Learn More`}</Button>
                  </div>
                </Column>
                <Column className="bg-white_A700 items-start justify-start w-[100%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] w-[100%]">
                      <Image
                        src="img_productcover1_3.png"
                        className="absolute lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] inset-[0] object-cover w-[100%]"
                        alt="productcover1"
                      />
                      <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[8%] my-[auto] w-[71%]">
                        <Button className="bg-red_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius3 shadow-bs2 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[30%]">{`Sale`}</Button>
                        <Column className="items-end lg:mt-[149px] xl:mt-[170px] mt-[192px] 3xl:mt-[230px] w-[100%]">
                          <Image
                            src="img_productactions_3.svg"
                            className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[82%]"
                            alt="productactions"
                          />
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="items-end lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Row className="items-center justify-end lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] w-[86%]">
                      <Text className="font-bold my-[1px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Painless procedures`}</Text>
                      <div className="3xl:ml-[12px] lg:ml-[7px] ml-[10px] w-[24%] xl:ml-[8px] input-wrap">
                        <Image
                          src="img_vector_7.svg"
                          className="absolute left-[5.5px] lg:left-[4px] xl:left-[4px] 2xl:left-[5px] 3xl:left-[6px] my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Button className="bg-bluegray_800 font-normal not-italic lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] xl:py-[6px] lg:py-[6px] py-[7.75px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius20 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 tracking-ls1 w-[100%]">{`4.9`}</Button>
                      </div>
                    </Row>
                  </Column>
                  <Text className="font-bold lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[55%]">{`magna fringilla urna porttitor`}</Text>
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[76%]">
                    {
                      <>
                        {`We focus on ergonomics `}
                        <br />
                        {`and meeting you....`}
                      </>
                    }
                  </Text>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[35%]">
                    <Image
                      src="img_framesec_3.svg"
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Framesec"
                    />
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`15 Sales`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] w-[45%]">
                    <Text className="font-bold xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_400 tracking-ls1">{`$16.48`}</Text>
                    <Text className="font-bold lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-blue_A700 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`$6.48`}</Text>
                  </Row>
                  <div className="3xl:mb-[42px] 3xl:mt-[12px] 3xl:mx-[30px] lg:mb-[27px] lg:mt-[7px] lg:mx-[19px] mb-[35px] mt-[10px] mx-[25px] w-[59%] xl:mb-[31px] xl:mt-[8px] xl:mx-[22px] input-wrap">
                    <Image
                      src="img_vector_8.svg"
                      className="absolute right-[20px] lg:right-[15px] xl:right-[17px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <Button className="border border-deep_orange_400 border-solid font-bold lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:pr-[45px] xl:pr-[51px] pr-[58.27999999999987px] 2xl:pr-[58px] 3xl:pr-[69px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius37 text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[100%]">{`Learn More`}</Button>
                  </div>
                </Column>
              </List>
            </Column>
          </Column>
          <Stack className="lg:h-[1334px] xl:h-[1525px] h-[1714px] 2xl:h-[1716px] 3xl:h-[2058px] w-[100%]">
            <Stack className="absolute 3xl:h-[1115px] lg:h-[722px] xl:h-[826px] h-[928.01px] 2xl:h-[929px] top-[0] w-[100%]">
              <div className="absolute bg-white_A700 3xl:h-[1039px] lg:h-[673px] xl:h-[770px] h-[865px] 2xl:h-[866px] top-[0] w-[100%]"></div>
              <Column className="absolute inset-x-[14%] inset-y-[0] items-start justify-center lg:py-[124px] xl:py-[142px] py-[160px] 3xl:py-[192px] w-[73%]">
                <Column className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[66%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Testimonials`}</Text>
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left tracking-ls1">{`Our Experts`}</Text>
                  <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[68%]">
                    {
                      <>
                        {`Problems trying to resolve the conflict between `}
                        <br />
                        {`the two major realms of Classical physics: Newtonian mechanics`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] w-[100%]">
                  <List
                    className="lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 items-center justify-start w-[100%]">
                      <Stack className="lg:h-[100px] xl:h-[114px] h-[128px] 2xl:h-[129px] 3xl:h-[154px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] rounded-radius200 xl:w-[113px] w-[128px] 3xl:w-[153px] lg:w-[99px]">
                        <Image
                          src="img_testimonialuse.png"
                          className="absolute lg:h-[100px] xl:h-[114px] h-[128px] 2xl:h-[129px] 3xl:h-[154px] inset-[0] object-cover xl:w-[113px] w-[128px] 3xl:w-[153px] lg:w-[99px]"
                          alt="testimonialuse"
                        />
                      </Stack>
                      <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1 w-[63%]">
                        {
                          <>
                            {`Slate helps you see how many more days `}
                            <br />
                            {`you need to work to reach your financial `}
                            <br />
                            {`goal for the month and year.`}
                          </>
                        }
                      </Text>
                      <Image
                        src="img_starssec.svg"
                        className="lg:h-[18px] xl:h-[20px] h-[22.01px] 2xl:h-[23px] 3xl:h-[27px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] object-contain w-[26%]"
                        alt="starssec"
                      />
                      <Column className="items-center justify-start lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] w-[31%]">
                        <Text className="font-bold mx-[auto] text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`Regina Miles`}</Text>
                        <Text className="font-bold lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1">{`Designer`}</Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-start w-[100%]">
                      <Stack className="lg:h-[100px] xl:h-[114px] h-[128px] 2xl:h-[129px] 3xl:h-[154px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] rounded-radius200 xl:w-[113px] w-[128px] 3xl:w-[153px] lg:w-[99px]">
                        <Image
                          src="img_testimonialuse_1.png"
                          className="absolute lg:h-[100px] xl:h-[114px] h-[128px] 2xl:h-[129px] 3xl:h-[154px] inset-[0] object-cover xl:w-[113px] w-[128px] 3xl:w-[153px] lg:w-[99px]"
                          alt="testimonialuse"
                        />
                      </Stack>
                      <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1 w-[61%]">
                        {
                          <>
                            {`Slate helps you see how many more days `}
                            <br />
                            {`you need to work to reach your financial `}
                            <br />
                            {`goal for the month and year.`}
                          </>
                        }
                      </Text>
                      <Image
                        src="img_starssec_1.svg"
                        className="lg:h-[18px] xl:h-[20px] h-[22.01px] 2xl:h-[23px] 3xl:h-[27px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] object-contain w-[25%]"
                        alt="starssec"
                      />
                      <Column className="items-center justify-start lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] w-[30%]">
                        <Text className="font-bold mx-[auto] text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`Regina Miles`}</Text>
                        <Text className="font-bold lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1">{`Designer`}</Text>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Stack>
            <Column className="absolute bg-white_A700 bottom-[0] items-start justify-center w-[100%]">
              <Column className="items-start justify-start mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] lg:mx-[154px] xl:mx-[176px] mx-[198px] 3xl:mx-[237px] w-[48%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1">{`Team`}</Text>
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-left tracking-ls1">{`Our Team`}</Text>
                <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1 w-[68%]">
                  {
                    <>
                      {`Problems trying to resolve the conflict between `}
                      <br />
                      {`the two major realms of Classical physics: Newtonian mechanics`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="items-center xl:mb-[103px] mb-[116px] 3xl:mb-[139px] lg:mb-[90px] mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] w-[100%]">
                <List
                  className="lg:gap-[23px] xl:gap-[26px] gap-[30px] 3xl:gap-[36px] grid grid-cols-4 min-h-[auto] mx-[auto] w-[73%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 items-center justify-start rounded-radius20 shadow-bs1 w-[100%]">
                    <Image
                      src="img_usercover1.png"
                      className="lg:h-[180px] xl:h-[206px] h-[231px] 2xl:h-[232px] 3xl:h-[278px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="usercover1"
                    />
                    <Text className="font-bold lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`Julian Jameson`}</Text>
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_600 tracking-ls1">{`Profession`}</Text>
                    <Image
                      src="img_socialmediase.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] object-contain w-[47%]"
                      alt="socialmediase"
                    />
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start rounded-radius20 shadow-bs1 w-[100%]">
                    <Image
                      src="img_usercover2.png"
                      className="lg:h-[180px] xl:h-[206px] h-[231px] 2xl:h-[232px] 3xl:h-[278px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="usercover2"
                    />
                    <Text className="font-bold lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`Julian Jameson`}</Text>
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_600 tracking-ls1">{`Profession`}</Text>
                    <Image
                      src="img_socialmediase_1.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] object-contain w-[46%]"
                      alt="socialmediase"
                    />
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start rounded-radius20 shadow-bs1 w-[100%]">
                    <Image
                      src="img_usercover3.png"
                      className="lg:h-[180px] xl:h-[206px] h-[231px] 2xl:h-[232px] 3xl:h-[278px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="usercover3"
                    />
                    <Text className="font-bold lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`Julian Jameson`}</Text>
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_600 tracking-ls1">{`Profession`}</Text>
                    <Image
                      src="img_socialmediase_2.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] object-contain w-[47%]"
                      alt="socialmediase"
                    />
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start rounded-radius20 shadow-bs1 w-[100%]">
                    <Image
                      src="img_usercover4.png"
                      className="lg:h-[180px] xl:h-[206px] h-[231px] 2xl:h-[232px] 3xl:h-[278px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                      alt="usercover4"
                    />
                    <Text className="font-bold lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1">{`Julian Jameson`}</Text>
                    <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_600 tracking-ls1">{`Profession`}</Text>
                    <Image
                      src="img_socialmediase_3.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] object-contain w-[47%]"
                      alt="socialmediase"
                    />
                  </Column>
                </List>
              </Column>
            </Column>
          </Stack>
          <Column className="bg-white_A700 items-center justify-center w-[100%]">
            <Column className="items-center justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[48%]">
              <Text className="font-bold mx-[auto] text-center text-deep_orange_400 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1">{`Newsletter`}</Text>
              <Text className="font-bold mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] text-bluegray_900 text-center lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 tracking-ls1">{`JOIN US`}</Text>
              <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 tracking-ls1 w-[68%]">
                {
                  <>
                    {`Problems trying to resolve the conflict between `}
                    <br />
                    {`the two major realms of Classical physics: Newtonian mechanics`}
                  </>
                }
              </Text>
            </Column>
            <Stack className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] w-[48%]">
              <Input
                className="absolute bg-gray_51 placeholder:bg-transparent border border-gray_300 border-solid font-normal inset-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius5 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 placeholder:text-gray_600 text-gray_600 text-left tracking-ls1 w-[100%]"
                name="Your Email"
                placeholder={`Your Email`}
              ></Input>
              <Button className="absolute bg-deep_orange_400 border border-gray_300 border-solid font-normal not-italic lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] right-[0] rounded-bl-[0] rounded-br-[5px] rounded-tl-[0] rounded-tr-[5px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[17%]">{`Subscribe`}</Button>
            </Stack>
          </Column>
          <footer className="w-[100%]">
            <Column className="bg-gray_50 w-[100%]">
              <Row className="bg-white_A700 items-center justify-start w-[100%]">
                <Column className="items-start lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] lg:my-[39px] xl:my-[45px] my-[51px] 3xl:my-[61px] w-[10%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Company Info`}</Text>
                  <Column className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[66%]">
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`About Us`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Carrier`}</Text>
                    <Text className="font-bold mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`We are hiring`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Blog`}</Text>
                  </Column>
                </Column>
                <Column className="items-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:my-[39px] xl:my-[45px] my-[51px] 3xl:my-[61px] w-[11%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Legal`}</Text>
                  <Column className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[64%]">
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`About Us`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Carrier`}</Text>
                    <Text className="font-bold mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`We are hiring`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Blog`}</Text>
                  </Column>
                </Column>
                <Column className="items-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:my-[39px] xl:my-[45px] my-[51px] 3xl:my-[61px] w-[10%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Features`}</Text>
                  <Column className="items-start justify-start lg:mr-[4px] xl:mr-[5px] mr-[6px] 3xl:mr-[7px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[96%]">
                    <Text className="font-bold lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Business Marketing`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`User Analytic`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Live Chat`}</Text>
                    <Text className="font-bold lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Unlimited Support`}</Text>
                  </Column>
                </Column>
                <Column className="items-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:my-[39px] xl:my-[45px] my-[51px] 3xl:my-[61px] w-[11%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Resources`}</Text>
                  <Column className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[70%]">
                    <Text className="font-bold xl:mr-[3px] lg:mr-[3px] mr-[4px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`IOS & Android`}</Text>
                    <Text className="font-bold mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Watch a Demo`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Customers`}</Text>
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`API`}</Text>
                  </Column>
                </Column>
                <Column className="items-start lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[22%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1">{`Get In Touch`}</Text>
                  <Column className="lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Column className="w-[100%]">
                      <Column className="items-end w-[100%]">
                        <Row className="items-center justify-end lg:mx-[36px] xl:mx-[41px] mx-[46.5px] 2xl:mx-[46px] 3xl:mx-[55px] w-[45%]">
                          <Image
                            src="img_bxbxphone.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="bxbxphone"
                          />
                          <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`(480) 555-0103`}</Text>
                        </Row>
                      </Column>
                      <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                        <Image
                          src="img_bxbxmap.svg"
                          className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain w-[7%]"
                          alt="bxbxmap"
                        />
                        <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[2px] lg:my-[2px] my-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                      </Row>
                      <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                        <Row className="items-center justify-end 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] w-[69%]">
                          <Image
                            src="img_carbonsendalt.svg"
                            className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] object-contain w-[11%]"
                            alt="carbonsendalt"
                          />
                          <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`debra.holt@example.com`}</Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Row className="bg-gray_50 items-center justify-between w-[100%]">
                <Text className="font-bold lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left tracking-ls1">{`Made With Love By Figmaland All Right Reserved`}</Text>
                <Image
                  src="img_colmd6.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[152px] xl:mr-[174px] mr-[196px] 3xl:mr-[235px] lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] object-contain w-[16%]"
                  alt="colmd6"
                />
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default MedicaluniversalPage;
