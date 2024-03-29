import React from "react";
import {useTranslation} from "react-i18next";

export default function About() {

    const {t, i18n} = useTranslation();

    return (
        <section className="text-lg text-justify bg-secondary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid items-center justify-center md:grid-cols-2">
                <div className="p-3">
                    {i18n.language === 'pl' ?
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[125px] border-accent pb-2">
                            {t("about_title")}
                        </h2>
                        :
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-accent pb-2">
                            {t("about_title")}
                        </h2>
                    }


                        <p className="pb-5">
                    {t("about_description")}
                        </p>
                        <p className="pb-5">
                    {t("about_description_2")}
                        </p>

                        <p>
                    {t("about_description_3")}
                        </p>
                        </div>
                        <div className="p-5 flex items-center justify-center">
                        <img
                        src="./src/assets/about.svg"
                        alt="Kamil Zeglen"
                        className="hidden w-3/4 md:block"
                        />
                        </div>
                        </div>
                        </section>
                        );
                    };