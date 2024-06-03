<template>
  <div>
    <div class="pt-20">
      <h1 class="text-6xl tracking-tighter">
        CHIME/<span class="font-bold text-red-500 tracking-normal">FRB</span>
      </h1>
      <h3 class="text-2xl pt-4">Fast Radio Bursts in Realtime</h3>
    </div>
    <Separator class="m-6" />
    <section class="container mx-auto">
      <h6 class="text-2xl pb-8 font-bold">Event Viewer</h6>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card :class="cn('w-[380px]', $attrs.class ?? 'bg-zinc-50')">
          <CardHeader>
            <CardTitle class="text-xl">Old Name</CardTitle>
            <CardDescription class="text-lg">N/A</CardDescription>
          </CardHeader>
        </Card>
        <Card :class="cn('w-[380px]', $attrs.class ?? 'bg-zinc-50')">
          <CardHeader>
            <CardTitle class="text-xl">TNS Name</CardTitle>
            <CardDescription class="text-lg">FRB20181209A</CardDescription>
          </CardHeader>
        </Card>
        <Card :class="cn('w-[380px]', $attrs.class ?? 'bg-zinc-50')">
          <CardHeader>
            <CardTitle class="text-xl">Repeater Name</CardTitle>
            <CardDescription class="text-lg">N/A</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
    <section>
      <h6 class="text-2xl p-8 font-bold">
        Localization, Exposure & Fluence Thresholds
      </h6>
      <div
        class="container mx-auto flex justify-center items-center text-center"
      >
        <div class="w-full max-w-2xl">
          <AspectRatio :ratio="16 / 9">
            <img
              src="/assets/img/localization.png"
              alt="Image"
              class="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      <div
        class="container mx-auto flex justify-center items-center text-center"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                class="w-[150px] text-center text-xl font-bold text-black"
              >
                Parameter
              </TableHead>
              <TableHead
                class="w-[150px] text-center text-xl font-bold text-black"
                >Value</TableHead
              >
            </TableRow>
          </TableHeader>
          <TableBody class="text-center">
            <TableRow>
              <TableCell class="font-medium"> ra [degrees] </TableCell>
              <TableCell>98.16±0.21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> dec [degrees] </TableCell>
              <TableCell> 68.69±0.21</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> gl [degrees] </TableCell>
              <TableCell> 146.19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> gb [degrees] </TableCell>
              <TableCell> 23.47</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> gb [degrees] </TableCell>
              <TableCell> 263.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">
                dm_exc_ne2001 [pc cm-3]
              </TableCell>
              <TableCell> 263.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">
                dm_exc_ymw16 [pc cm-3]
              </TableCell>
              <TableCell> 259.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> exp_up [hour] </TableCell>
              <TableCell> 32±19</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
    <section>
      <h6 class="text-2xl p-8 font-bold">Burst Properties</h6>
      <div
        class="container mx-auto flex justify-center items-center text-center"
      >
        <div class="w-full max-w-2xl">
          <AspectRatio :ratio="1 / 1">
            <img
              src="/assets/img/waterfall_hires.png"
              alt="Image"
              class="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      <div
        class="container mx-auto flex justify-center items-center text-center"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                class="w-[150px] text-center text-xl font-bold text-black"
              >
                Parameter
              </TableHead>
              <TableHead
                class="w-[150px] text-center text-xl font-bold text-black"
                >Value</TableHead
              >
            </TableRow>
          </TableHeader>
          <TableBody class="text-center">
            <TableRow>
              <TableCell class="font-medium"> bonsai_dm [pc cm-3] </TableCell>
              <TableCell>24.2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> snr_fitb </TableCell>
              <TableCell> 328.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> dm_fitb [pc cm-3] </TableCell>
              <TableCell> 328.6557±0.0040 </TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> flux [Jy] </TableCell>
              <TableCell> 2.5±1.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> fluence [Jy ms] </TableCell>
              <TableCell> 3.2±1.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> bc_width [s] </TableCell>
              <TableCell> 0.00197</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> scat_time [s] </TableCell>
              <TableCell> 0.00064</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> mjd_400 [MJD] </TableCell>
              <TableCell>
                [5±0, 8±., 4±0, 6±0, 1±0, .±0, 3±0, 9±0, 2±0, 2±0, 6±0, 6±4,
                3±4, 3±4, 6±3, 0±1, 1±0.4]</TableCell
              >
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> sp_run </TableCell>
              <TableCell>
                [5±0, 8±., 4±0, 6±0, 1±0, .±0, 3±0, 9±0, 2±0, 1±0, 6±1,
                7±3]</TableCell
              >
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> width_fitb [s] </TableCell>
              <TableCell> [0±0, .±., 0±0, 0±0, 0±0, 5±0, 9±2, 7±0]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium"> sp_idx </TableCell>
              <TableCell> [0±0, .±., 4±9, 2±5]</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
    <Footer />
  </div>
</template>
